import path from 'path'
import {
  LIBS_FOLDER,
  SOURCE_PATH,
  AURA_FOLDER,
  LWC_FOLDER,
  STATIC_RESOURCE_FOLDER,
  FLOW_FOLDER,
  FLEXI_PAGES_FOLDER,
  LABELS_PATH
} from './constants'
/**
 * Check if in list of changed files we have files from libs directory
 * @param files list of changed files
 * @returns boolean as string
 */
export function hasLibsChanges(files: string[] = []): Boolean {
  return files.some(file => file.includes(LIBS_FOLDER))
}

export function isSourceFile(file: string): Boolean {
  return file.includes(SOURCE_PATH)
}
export function isLibsFile(file: string): Boolean {
  return (
    !isSourceFile(file) &&
    path
      .dirname(file)
      .split(path.sep)
      .includes(LIBS_FOLDER)
  )
}
export function isNotPackageDeleteable(file: string): Boolean {
  return (
    file.includes(`${path.sep}${FLOW_FOLDER}${path.sep}`) ||
    file.includes(`${path.sep}${FLEXI_PAGES_FOLDER}${path.sep}`)
  )
}

export function isLightningMetadataPath(file: string): Boolean {
  return (
    file.includes(`${path.sep}${AURA_FOLDER}${path.sep}`) ||
    file.includes(`${path.sep}${LWC_FOLDER}${path.sep}`)
  )
}
export function isStaticresourceMetadataPath(file: string): Boolean {
  return file.includes(`${path.sep}${STATIC_RESOURCE_FOLDER}${path.sep}`)
}
export function isSpecificMetadataPath(file: string): Boolean {
  return isLightningMetadataPath(file) || isStaticresourceMetadataPath(file)
}

export function getCommonMetadataPath(file: string): string {
  const filePathParts = path.extname(file)
    ? path.dirname(file).split(path.sep)
    : file.split(path.sep)
  const metadataFolderIndex = +(
    (filePathParts.includes(AURA_FOLDER) &&
      filePathParts.indexOf(AURA_FOLDER)) ||
    (filePathParts.includes(LWC_FOLDER) &&
      filePathParts.lastIndexOf(LWC_FOLDER)) ||
    (filePathParts.includes(STATIC_RESOURCE_FOLDER) &&
      filePathParts.indexOf(STATIC_RESOURCE_FOLDER))
  )

  return filePathParts.slice(0, metadataFolderIndex + 2).join(path.sep)
}
export function getStaticresourceMetadataPath(file: string): string {
  if (path.extname(file) === '.xml') {
    return path.join(path.dirname(file), path.basename(file).split('.')[0])
  }
  return getCommonMetadataPath(file)
}
export function getMetadataPath(file: string): string {
  return (
    (isLightningMetadataPath(file) && getCommonMetadataPath(file)) ||
    (isStaticresourceMetadataPath(file) &&
      getStaticresourceMetadataPath(file)) ||
    file
  )
}

export function isLabelsPath(file: string): Boolean {
  return file.includes(LABELS_PATH)
}

export function hasLabelsChanges(files: string[]): Boolean {
  return files.some(file => isLabelsPath(file))
}
