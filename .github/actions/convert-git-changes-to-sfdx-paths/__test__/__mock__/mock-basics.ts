const files = [
  'force-app/main/default/lwc/addedComponent/addedComponent.js',
  'force-app/main/default/lwc/addedComponent/addedComponent.html',
  'force-app/main/default/lwc/addedComponent/addedComponent.js-meta.xml',
  'force-app/main/default/lwc/modifiedComponent/modifiedComponent.js',
  'force-app/main/default/lwc/modifiedComponent/modifiedComponent.html',
  'force-app/main/default/lwc/modifiedComponent/modifiedComponent.js-meta.xml',
  'force-app/main/default/lwc/removedComponent/removedComponent.js',
  'force-app/main/default/lwc/removedComponent/removedComponent.html',
  'force-app/main/default/lwc/removedComponent/removedComponent.js-meta.xml',
  'force-app/main/default/flexipages/DeletedPage.flexipage-meta.xml',
  'force-app/main/default/lwc/renamedComponent/renamedComponent.js',
  'force-app/main/default/lwc/renamedComponent/renamedComponent.html',
  'force-app/main/default/lwc/renamedComponent/renamedComponent.js-meta.xml',
  'force-app/main/default/aura/addedComponent/addedComponentController.js',
  'force-app/main/default/aura/addedComponent/addedComponent.cmp',
  'force-app/main/default/aura/addedComponent/addedComponent.cmp-meta.xml',
  'force-app/main/default/aura/modifiedComponent/modifiedComponentController.js',
  'force-app/main/default/aura/modifiedComponent/modifiedComponent.cmp',
  'force-app/main/default/aura/modifiedComponent/modifiedComponent.cmp-meta.xml',
  'force-app/main/default/aura/removedComponent/removedComponentController.js',
  'force-app/main/default/aura/removedComponent/removedComponent.cmp',
  'force-app/main/default/aura/removedComponent/removedComponent.cmp-meta.xml',
  'force-app/main/default/aura/renamedComponent/renamedComponentController.js',
  'force-app/main/default/aura/renamedComponent/renamedComponent.cmp',
  'force-app/main/default/aura/renamedComponent/renamedComponent.cmp-meta.xml',
  'force-app/main/default/aura/oldNameRenamedComponent/oldNameRenamedComponentController.js',
  'force-app/main/default/aura/oldNameRenamedComponent/oldNameRenamedComponent.cmp',
  'force-app/main/default/aura/oldNameRenamedComponent/oldNameRenamedComponent.cmp-meta.xml',
  'force-app/main/default/classes/AddedClass.cls',
  'force-app/main/default/classes/AddedClass.cls-meta.xml',
  'force-app/main/default/classes/OldRenamedClass.cls',
  'force-app/main/default/classes/OldRenamedClass.cls-meta.xml',
  'force-app/main/default/classes/ModifiedClass.cls',
  'force-app/main/default/classes/ModifiedClass.cls-meta.xml',
  'force-app/main/default/classes/RemovedClass.cls',
  'force-app/main/default/classes/RemovedClass.cls-meta.xml',
  'force-app/main/default/classes/RenamedClass.cls',
  'force-app/main/default/classes/RenamedClass.cls-meta.xml',
  'force-app/main/default/classes/OldRenamedClass.cls',
  'force-app/main/default/classes/OldRenamedClass.cls-meta.xml'
]
const added = [
  'force-app/main/default/lwc/addedComponent/addedComponent.js',
  'force-app/main/default/lwc/addedComponent/addedComponent.html',
  'force-app/main/default/lwc/addedComponent/addedComponent.js-meta.xml',
  'force-app/main/default/aura/addedComponent/addedComponentController.js',
  'force-app/main/default/aura/addedComponent/addedComponent.cmp',
  'force-app/main/default/aura/addedComponent/addedComponent.cmp-meta.xml',
  'force-app/main/default/classes/AddedClass.cls',
  'force-app/main/default/classes/AddedClass.cls-meta.xml'
]
const modified = [
  'force-app/main/default/lwc/modifiedComponent/modifiedComponent.js',
  'force-app/main/default/lwc/modifiedComponent/modifiedComponent.html',
  'force-app/main/default/lwc/modifiedComponent/modifiedComponent.js-meta.xml',
  'force-app/main/default/aura/modifiedComponent/modifiedComponentController.js',
  'force-app/main/default/aura/modifiedComponent/modifiedComponent.cmp',
  'force-app/main/default/aura/modifiedComponent/modifiedComponent.cmp-meta.xml',
  'force-app/main/default/classes/ModifiedClass.cls',
  'force-app/main/default/classes/ModifiedClass.cls-meta.xml'
]
const removed = [
  'force-app/main/default/lwc/removedComponent/removedComponent.js',
  'force-app/main/default/lwc/removedComponent/removedComponent.html',
  'force-app/main/default/lwc/removedComponent/removedComponent.js-meta.xml',
  'force-app/main/default/aura/removedComponent/removedComponentController.js',
  'force-app/main/default/aura/removedComponent/removedComponent.cmp',
  'force-app/main/default/aura/removedComponent/removedComponent.cmp-meta.xml',
  'force-app/main/default/flexipages/DeletedPage.flexipage-meta.xml',
  'force-app/main/default/classes/RemovedClass.cls',
  'force-app/main/default/classes/RemovedClass.cls-meta.xml',
  'force-app/main/default/aura/auraToUpdate/helper.js',
  'force-app/main/default/lwc/lwcToUpdate/helper.js'
]
const renamed = [
  'force-app/main/default/lwc/renamedComponent/renamedComponent.js',
  'force-app/main/default/lwc/renamedComponent/renamedComponent.html',
  'force-app/main/default/lwc/renamedComponent/renamedComponent.js-meta.xml',
  'force-app/main/default/aura/renamedComponent/renamedComponentController.js',
  'force-app/main/default/aura/renamedComponent/renamedComponent.cmp',
  'force-app/main/default/aura/renamedComponent/renamedComponent.cmp-meta.xml',
  'force-app/main/default/classes/RenamedClass.cls',
  'force-app/main/default/classes/RenamedClass.cls-meta.xml',
  'force-app/main/default/aura/newRenamedComponent/service.js'
]
const previous = [
  'force-app/main/default/lwc/oldNameRenamedComponent/oldNameRenamedComponent.js',
  'force-app/main/default/lwc/oldNameRenamedComponent/oldNameRenamedComponent.html',
  'force-app/main/default/lwc/oldNameRenamedComponent/oldNameRenamedComponent.js-meta.xml',
  'force-app/main/default/aura/oldNameRenamedComponent/oldNameRenamedComponentController.js',
  'force-app/main/default/aura/oldNameRenamedComponent/oldNameRenamedComponent.cmp',
  'force-app/main/default/aura/oldNameRenamedComponent/oldNameRenamedComponent.cmp-meta.xml',
  'force-app/main/default/classes/OldRenamedClass.cls',
  'force-app/main/default/classes/OldRenamedClass.cls-meta.xml',
  'force-app/main/default/aura/newRenamedComponent/oldservice.js'
]

export const changedFiles = {files, added, renamed, removed, previous, modified}
export const developExpectedResult = {
  deployPaths:
    '"force-app/main/default/lwc/addedComponent, \\\n' +
    'force-app/main/default/aura/addedComponent, \\\n' +
    'force-app/main/default/classes/AddedClass.cls, \\\n' +
    'force-app/main/default/classes/AddedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/lwc/modifiedComponent, \\\n' +
    'force-app/main/default/aura/modifiedComponent, \\\n' +
    'force-app/main/default/classes/ModifiedClass.cls, \\\n' +
    'force-app/main/default/classes/ModifiedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/lwc/renamedComponent, \\\n' +
    'force-app/main/default/aura/renamedComponent, \\\n' +
    'force-app/main/default/classes/RenamedClass.cls, \\\n' +
    'force-app/main/default/classes/RenamedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/aura/newRenamedComponent, \\\n' +
    'force-app/main/default/aura/auraToUpdate, \\\n' +
    'force-app/main/default/lwc/lwcToUpdate"',
  deployPathParts:
    '["force-app/main/default/lwc/addedComponent","force-app/main/default/aura/addedComponent","force-app/main/default/classes/AddedClass.cls","force-app/main/default/classes/AddedClass.cls-meta.xml","force-app/main/default/lwc/modifiedComponent","force-app/main/default/aura/modifiedComponent","force-app/main/default/classes/ModifiedClass.cls","force-app/main/default/classes/ModifiedClass.cls-meta.xml","force-app/main/default/lwc/renamedComponent","force-app/main/default/aura/renamedComponent","force-app/main/default/classes/RenamedClass.cls","force-app/main/default/classes/RenamedClass.cls-meta.xml","force-app/main/default/aura/newRenamedComponent","force-app/main/default/aura/auraToUpdate","force-app/main/default/lwc/lwcToUpdate"]',
  deletePaths:
    '"force-app/main/default/lwc/removedComponent, \\\n' +
    'force-app/main/default/aura/removedComponent, \\\n' +
    'force-app/main/default/flexipages/DeletedPage.flexipage-meta.xml, \\\n' +
    'force-app/main/default/classes/RemovedClass.cls, \\\n' +
    'force-app/main/default/classes/RemovedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/lwc/oldNameRenamedComponent, \\\n' +
    'force-app/main/default/aura/oldNameRenamedComponent, \\\n' +
    'force-app/main/default/classes/OldRenamedClass.cls, \\\n' +
    'force-app/main/default/classes/OldRenamedClass.cls-meta.xml"',
  deletePathParts:
    '["force-app/main/default/lwc/removedComponent","force-app/main/default/aura/removedComponent","force-app/main/default/flexipages/DeletedPage.flexipage-meta.xml","force-app/main/default/classes/RemovedClass.cls","force-app/main/default/classes/RemovedClass.cls-meta.xml","force-app/main/default/lwc/oldNameRenamedComponent","force-app/main/default/aura/oldNameRenamedComponent","force-app/main/default/classes/OldRenamedClass.cls","force-app/main/default/classes/OldRenamedClass.cls-meta.xml"]'
}
export const packageExpectedResult = {
  deployPaths:
    '"force-app/main/default/lwc/addedComponent, \\\n' +
    'force-app/main/default/aura/addedComponent, \\\n' +
    'force-app/main/default/classes/AddedClass.cls, \\\n' +
    'force-app/main/default/classes/AddedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/lwc/modifiedComponent, \\\n' +
    'force-app/main/default/aura/modifiedComponent, \\\n' +
    'force-app/main/default/classes/ModifiedClass.cls, \\\n' +
    'force-app/main/default/classes/ModifiedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/lwc/renamedComponent, \\\n' +
    'force-app/main/default/aura/renamedComponent, \\\n' +
    'force-app/main/default/classes/RenamedClass.cls, \\\n' +
    'force-app/main/default/classes/RenamedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/aura/newRenamedComponent, \\\n' +
    'force-app/main/default/aura/auraToUpdate, \\\n' +
    'force-app/main/default/lwc/lwcToUpdate"',
  deployPathParts:
    '["force-app/main/default/lwc/addedComponent","force-app/main/default/aura/addedComponent","force-app/main/default/classes/AddedClass.cls","force-app/main/default/classes/AddedClass.cls-meta.xml","force-app/main/default/lwc/modifiedComponent","force-app/main/default/aura/modifiedComponent","force-app/main/default/classes/ModifiedClass.cls","force-app/main/default/classes/ModifiedClass.cls-meta.xml","force-app/main/default/lwc/renamedComponent","force-app/main/default/aura/renamedComponent","force-app/main/default/classes/RenamedClass.cls","force-app/main/default/classes/RenamedClass.cls-meta.xml","force-app/main/default/aura/newRenamedComponent","force-app/main/default/aura/auraToUpdate","force-app/main/default/lwc/lwcToUpdate"]',
  deletePaths:
    '"force-app/main/default/lwc/removedComponent, \\\n' +
    'force-app/main/default/aura/removedComponent, \\\n' +
    'force-app/main/default/classes/RemovedClass.cls, \\\n' +
    'force-app/main/default/classes/RemovedClass.cls-meta.xml, \\\n' +
    'force-app/main/default/lwc/oldNameRenamedComponent, \\\n' +
    'force-app/main/default/aura/oldNameRenamedComponent, \\\n' +
    'force-app/main/default/classes/OldRenamedClass.cls, \\\n' +
    'force-app/main/default/classes/OldRenamedClass.cls-meta.xml"',
  deletePathParts:
    '["force-app/main/default/lwc/removedComponent","force-app/main/default/aura/removedComponent","force-app/main/default/classes/RemovedClass.cls","force-app/main/default/classes/RemovedClass.cls-meta.xml","force-app/main/default/lwc/oldNameRenamedComponent","force-app/main/default/aura/oldNameRenamedComponent","force-app/main/default/classes/OldRenamedClass.cls","force-app/main/default/classes/OldRenamedClass.cls-meta.xml"]'
}
