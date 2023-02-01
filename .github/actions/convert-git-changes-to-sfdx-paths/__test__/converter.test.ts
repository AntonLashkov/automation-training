import {convertToSfdxPath} from '../src/converter'
import lwcMultifolderExcpectedResult, {
  changedFiles as lwcMultifolderChangedFiles
} from './__mock__/mock-lwc-multifolder'
import {
  changedFiles as basicChangedFiles,
  developExpectedResult as basicDevelopExpectedResult,
  packageExpectedResult as basicPackageExpectedResult
} from './__mock__/mock-basics'
import {
  changedFiles as appChangedFiles,
  expectedResult as appExpectedResult
} from './__mock__/mock-applications'
import {
  changedFiles as configChangedFiles,
  expectedResult as configExpectedResult
} from './__mock__/mock-config-metadata'

describe('convert tests', () => {
  it('test basic conversion with all type of files for development', async () => {
    const converted = convertToSfdxPath(basicChangedFiles)
    expect(converted.deployPaths).toBe(basicDevelopExpectedResult.deployPaths)
    expect(converted.deletePaths).toBe(basicDevelopExpectedResult.deletePaths)
  })
  it('test basic conversion with all type of files for package', async () => {
    const converted = convertToSfdxPath(basicChangedFiles, 'package')
    expect(converted.deployPaths).toBe(basicPackageExpectedResult.deployPaths)
    expect(converted.deletePaths).toBe(basicPackageExpectedResult.deletePaths)
  })
  it('test lwc multifolder with all type of files', async () => {
    const converted = convertToSfdxPath(lwcMultifolderChangedFiles)
    expect(converted.deployPaths).toBe(
      lwcMultifolderExcpectedResult.deployPaths
    )
    expect(converted.deletePaths).toBe(
      lwcMultifolderExcpectedResult.deletePaths
    )
  })
  it('test applications', async () => {
    const converted = convertToSfdxPath(appChangedFiles)
    expect(converted.deployPaths).toBe(appExpectedResult.deployPaths)
    expect(converted.deletePaths).toBe(appExpectedResult.deletePaths)
  })
  it('test config metadata', async () => {
    const converted = convertToSfdxPath(configChangedFiles)
    expect(converted.deployPaths).toBe(configExpectedResult.deployPaths)
    expect(converted.deletePaths).toBe(configExpectedResult.deletePaths)
  })
})
