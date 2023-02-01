import {debug, getInput, setFailed} from '@actions/core'
import {
  prepareConnectedApp as _prepareConnectedApp,
  prepareDefaultConnectorSettings as _prepareDefaultConnectorSettings
} from './connected-app'

async function run(): Promise<void> {
  try {
    await prepareConnectedApp()
    await prepareDefaultConnectorSettings()
  } catch (error) {
    setFailed(error.message)
  }
}

async function prepareConnectedApp(): Promise<void> {
  const isEnabled = getInput('prepare-app')
  if (isEnabled !== 'true') {
    return
  }
  debug(`Prepare sumo connected app`)
  const orgType: string = getInput('org-type')
  const connectedAppCertificate: string = getInput('app-certificate')
  if (!connectedAppCertificate) {
    throw new Error('Certificate is required for prepare connected app action')
  }
  return _prepareConnectedApp({
    type: orgType,
    certificate: connectedAppCertificate
  })
}

async function prepareDefaultConnectorSettings(): Promise<void> {
  const isEnabled = getInput('prepare-default-connector-settings')
  if (isEnabled !== 'true') {
    return
  }
  debug(`Prepare default connector settings`)
  const orgType: string = getInput('org-type')
  const consumerKey: string = getInput('consumer-key')
  const adminToken: string = getInput('admin-token')
  const endpointUrl: string = getInput('java-endpoint')
  const cryptoKey: string = getInput('crypto-key')
  const zoomClientId: string = getInput('zoom-client-id')
  const zoomClientSecret: string = getInput('zoom-client-secret')
  return _prepareDefaultConnectorSettings({
    type: orgType,
    consumerKey,
    adminToken,
    endpointUrl,
    cryptoKey,
    zoomClientId,
    zoomClientSecret
  })
}

run()
