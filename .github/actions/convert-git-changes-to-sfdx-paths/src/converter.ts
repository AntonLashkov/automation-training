import path from 'path'
import {SOURCE_PATH, STATIC_RESOURCE_FOLDER} from './constants'
import {
  isSourceFile,
  getMetadataPath,
  isSpecificMetadataPath,
  getCommonMetadataPath,
  hasLibsChanges,
  isStaticresourceMetadataPath,
  isNotPackageDeleteable
} from './utils'

export interface ConvertRequest {
  files: string[]
  modified: string[]
  added: string[]
  removed: string[]
  renamed: string[]
  previous: string[]
}

export interface ConvertResponse {
  deployPaths: string
  deployPathParts: string
  deletePaths: string
  deletePathParts: string
  hasDeletes: string
  hasChanges: string
}

export function convertToSfdxPath(
  {files, added, modified, removed, renamed, previous}: ConvertRequest,
  mode = 'develop'
): ConvertResponse {
  let deployMetadata = new Set(
    [...added, ...modified, ...renamed]
      .filter((file: string) => isSourceFile(file))
      .map((file: string) => getMetadataPath(file))
  )

  let deleteMetadata: Set<string> = new Set()
  for (const file of [...removed, ...previous].filter((f: string) =>
    isSourceFile(f)
  )) {
    if (isSpecificMetadataPath(file) && path.extname(file) !== '.xml') {
      deployMetadata.add(getCommonMetadataPath(file))
    } else {
      deleteMetadata.add(getMetadataPath(file))
    }
  }

  // if we have some changes in libs folder redeploy all static resources
  if (hasLibsChanges(files)) {
    deployMetadata = new Set(
      [...deployMetadata].filter(file => !isStaticresourceMetadataPath(file))
    )
    deployMetadata.add(path.join(SOURCE_PATH, STATIC_RESOURCE_FOLDER))
  }

  deployMetadata = new Set(
    [...deployMetadata].filter((file: string) => !deleteMetadata.has(file))
  )

  if (mode === 'package') {
    deleteMetadata = new Set(
      [...deleteMetadata].filter(
        (file: string) => !isNotPackageDeleteable(file)
      )
    )
  }

  return {
    deployPaths: `"${Array.from(deployMetadata).join(', \\\n')}"`,
    deployPathParts: JSON.stringify(Array.from(deployMetadata)),
    deletePaths: `"${Array.from(deleteMetadata).join(', \\\n')}"`,
    deletePathParts: JSON.stringify(Array.from(deleteMetadata)),
    hasDeletes: (deleteMetadata.size > 0).toString(),
    hasChanges: (deployMetadata.size > 0).toString()
  }
}
