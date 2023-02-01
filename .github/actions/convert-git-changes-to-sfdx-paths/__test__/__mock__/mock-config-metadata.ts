const files = [
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/1.txt',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/aura',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/flexipages',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/lwc',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/pages',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/aura/previewApp',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Preview.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/preview',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/test-results',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Admin_Settings.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Builder.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Calendar.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_User_Settings.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/redux/lwc/reduxProvider/reduxProvider.js',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sfdx-project.json',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sumo-dx/dist/index.js',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sumo-dx/src/org/deploy.js',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sumo-dx/src/utils.js'
]

const added = [
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/1.txt',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/aura',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/flexipages',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/lwc',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/config/metadata/pages',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/aura/previewApp',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Preview.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/preview',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/test-results'
]
const modified = [
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Admin_Settings.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Builder.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Calendar.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_User_Settings.flexipage-meta.xml',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/redux/lwc/reduxProvider/reduxProvider.js',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sfdx-project.json',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sumo-dx/dist/index.js',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sumo-dx/src/org/deploy.js',
  '/Users/d-pro/Documents/Work/sumo/sumo-cep/sumo-dx/src/utils.js'
]
const removed: string[] = []
const renamed: string[] = []
const previous: string[] = []

export const changedFiles = {files, added, renamed, removed, previous, modified}
export const expectedResult = {
  deployPaths:
    '"/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/aura/previewApp, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Preview.flexipage-meta.xml, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/preview, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page-meta.xml, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Admin_Settings.flexipage-meta.xml, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Builder.flexipage-meta.xml, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Calendar.flexipage-meta.xml, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_User_Settings.flexipage-meta.xml, \\\n' +
    '/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/redux/lwc/reduxProvider"',
  deployPathParts:
    '["/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/aura/previewApp","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Preview.flexipage-meta.xml","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/preview","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/pages/preview.page-meta.xml","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Admin_Settings.flexipage-meta.xml","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Builder.flexipage-meta.xml","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_Event_Calendar.flexipage-meta.xml","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/flexipages/SUMO_User_Settings.flexipage-meta.xml","/Users/d-pro/Documents/Work/sumo/sumo-cep/force-app/main/default/lwc/redux/lwc/reduxProvider"]',
  deletePaths: '""',
  deletePathParts: '[]'
}
