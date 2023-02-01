import path from 'path'

export const LIBS_FOLDER = 'libs'
export const STATIC_RESOURCE_FOLDER = 'staticresources'
export const LABELS_FOLDER = 'labels'
export const FLEXI_PAGES_FOLDER = 'flexipages'
export const FLOW_FOLDER = 'flows'
export const LWC_FOLDER = 'lwc'
export const AURA_FOLDER = 'aura'
export const SOURCE_PATH = path.join('force-app', 'main', 'default')
export const STATIC_RESOURCE_PATH = path.join(
  SOURCE_PATH,
  STATIC_RESOURCE_FOLDER
)
export const LABELS_PATH = path.join(SOURCE_PATH, LABELS_FOLDER)
export const LABELS_METADATA = path.join(
  SOURCE_PATH,
  LABELS_FOLDER,
  'CustomLabels.labels-meta.xml'
)
