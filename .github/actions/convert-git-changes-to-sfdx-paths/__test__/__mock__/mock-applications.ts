const files = [
  '.github/workflows/deploy.yml',
  '.github/workflows/package.yml',
  'force-app/main/default/applications/SUMO_CEP_Admin.app-meta.xml',
  'force-app/main/default/applications/SUMO_Event_Scheduler.app-meta.xml',
  'force-app/main/default/applications/SUMO_Scheduler.app-meta.xml',
  'force-app/main/default/applications/Sumo_Event_Builder.app-meta.xml',
  'force-app/main/default/classes/EventMapper.cls',
  'force-app/main/default/labels/CustomLabels.labels-meta.xml',
  'force-app/main/default/objects/Area__c/Area__c.object-meta.xml',
  'force-app/main/default/permissionsets/SUMOAdminPermissions.permissionset-meta.xml',
  'force-app/main/default/permissionsets/SUMOStandardPermissions.permissionset-meta.xml',
  'force-app/main/default/tabs/SUMO_Event_Calendar.tab-meta.xml'
]
const added = [
  'force-app/main/default/applications/SUMO_CEP_Admin.app-meta.xml',
  'force-app/main/default/applications/SUMO_Event_Scheduler.app-meta.xml'
]
const modified = [
  '.github/workflows/deploy.yml',
  '.github/workflows/package.yml',
  'force-app/main/default/applications/SUMO_Scheduler.app-meta.xml',
  'force-app/main/default/classes/EventMapper.cls',
  'force-app/main/default/labels/CustomLabels.labels-meta.xml',
  'force-app/main/default/objects/Area__c/Area__c.object-meta.xml',
  'force-app/main/default/permissionsets/SUMOAdminPermissions.permissionset-meta.xml',
  'force-app/main/default/permissionsets/SUMOStandardPermissions.permissionset-meta.xml'
]
const removed = [
  'force-app/main/default/applications/Sumo_Event_Builder.app-meta.xml'
]
const renamed = ['force-app/main/default/tabs/SUMO_Event_Calendar.tab-meta.xml']
const previous = ['force-app/main/default/tabs/Event_Calendar.tab-meta.xml']

export const changedFiles = {files, added, renamed, removed, previous, modified}
export const expectedResult = {
  deployPaths:
    '"force-app/main/default/applications/SUMO_CEP_Admin.app-meta.xml, \\\n' +
    'force-app/main/default/applications/SUMO_Event_Scheduler.app-meta.xml, \\\n' +
    'force-app/main/default/applications/SUMO_Scheduler.app-meta.xml, \\\n' +
    'force-app/main/default/classes/EventMapper.cls, \\\n' +
    'force-app/main/default/labels/CustomLabels.labels-meta.xml, \\\n' +
    'force-app/main/default/objects/Area__c/Area__c.object-meta.xml, \\\n' +
    'force-app/main/default/permissionsets/SUMOAdminPermissions.permissionset-meta.xml, \\\n' +
    'force-app/main/default/permissionsets/SUMOStandardPermissions.permissionset-meta.xml, \\\n' +
    'force-app/main/default/tabs/SUMO_Event_Calendar.tab-meta.xml"',
  deployPathParts:
    '["force-app/main/default/applications/SUMO_CEP_Admin.app-meta.xml","force-app/main/default/applications/SUMO_Event_Scheduler.app-meta.xml",".github/workflows/deploy.yml",".github/workflows/package.yml","force-app/main/default/applications/SUMO_Scheduler.app-meta.xml","force-app/main/default/classes/EventMapper.cls","force-app/main/default/labels/CustomLabels.labels-meta.xml","force-app/main/default/objects/Area__c/Area__c.object-meta.xml","force-app/main/default/permissionsets/SUMOAdminPermissions.permissionset-meta.xml","force-app/main/default/permissionsets/SUMOStandardPermissions.permissionset-meta.xml", "force-app/main/default/tabs/SUMO_Event_Calendar.tab-meta.xml"]',
  deletePaths:
    '"force-app/main/default/applications/Sumo_Event_Builder.app-meta.xml, \\\n' +
    'force-app/main/default/tabs/Event_Calendar.tab-meta.xml"',
  deletePathParts:
    '["force-app/main/default/applications/Sumo_Event_Builder.app-meta.xml", "force-app/main/default/tabs/Event_Calendar.tab-meta.xml"]'
}
