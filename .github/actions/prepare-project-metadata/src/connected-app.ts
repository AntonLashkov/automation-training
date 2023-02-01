import {renderTemplate} from './utils'
export interface ConnectedAppRequest {
  type?: string | undefined
  certificate: string
}
export interface DefaultConnectorSettingsRequest {
  type?: string | undefined
  consumerKey?: string | undefined
  adminToken?: string | undefined
  cryptoKey?: string | undefined
  endpointUrl?: string | undefined
  zoomClientId?: string | undefined
  zoomClientSecret?: string | undefined
}
export async function prepareConnectedApp({
  type,
  certificate
}: ConnectedAppRequest): Promise<void> {
  return renderTemplate({
    data: {certificate, type: convertType(type)},
    source:
      'config/connected-app/SUMOConnectedApp.connectedApp-meta.template.xml',
    destination: 'config/connected-app/SUMOConnectedApp.connectedApp-meta.xml'
  })
}

export async function prepareDefaultConnectorSettings({
  type,
  ...data
}: DefaultConnectorSettingsRequest): Promise<void> {
  return renderTemplate({
    data: {...data, type: convertType(type)},
    source:
      'config/connected-app/DefaultConnectionSettings.Settings.md-meta.template.xml',
    destination:
      'config/connected-app/DefaultConnectionSettings.Settings.md-meta.xml'
  })
}

const convertType = (orgType: string | undefined): string => {
  switch (orgType) {
    case 'production':
      return 'login'
    case 'sandbox':
    case 'scratch':
      return 'test'
    default:
      return 'login'
  }
}
