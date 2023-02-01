import {getInput, debug, setOutput, setFailed} from '@actions/core'
import {hasLibsChanges, hasLabelsChanges} from './utils'
import {convertToSfdxPath} from './converter'
import {LABELS_PATH} from './constants'

async function run(): Promise<void> {
  try {
    const all: string[] = JSON.parse(getInput('files'))
    const added: string[] = JSON.parse(getInput('files-added'))
    const modified: string[] = JSON.parse(getInput('files-modified'))
    const removed: string[] = JSON.parse(getInput('files-removed'))
    const renamed: string[] = JSON.parse(getInput('files-renamed'))
    const previous: string[] = JSON.parse(getInput('files-previous'))
    const mode: string = getInput('mode')
    debug(`
      Files:          ${all}
      Files added:    ${added}
      Files modified: ${modified}
      Files removed:  ${removed}
      Files renamed:  ${renamed}
      Files previous: ${previous}
    `)

    const converted = convertToSfdxPath(
      {
        files: all,
        modified,
        added,
        removed,
        renamed,
        previous
      },
      mode
    )

    debug(`Deploy Paths: ${converted.deployPathParts}`)
    debug(`Delete Paths: ${converted.deletePathParts}`)

    setOutput('build-libs', hasLibsChanges(all).toString())
    setOutput('has-labels', hasLabelsChanges(all).toString())
    setOutput('labels-path', LABELS_PATH)
    setOutput('deploy-paths', converted.deployPaths)
    setOutput('delete-paths', converted.deletePaths)
    setOutput('has-deletes', converted.hasDeletes)
    setOutput('has-changes', converted.hasChanges)
    setOutput('deploy-path-parts', converted.deployPathParts)
    setOutput('delete-path-parts', converted.deletePathParts)
  } catch (error) {
    setFailed(error.message)
  }
}

run()
