const files = [
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup/baseLookup.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup/service.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupContainer/lookupContainer.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/actionTypes.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/actions.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/commonActions.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/getvalueSaga.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/helpers.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/lookup.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/lookups.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/public_api.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/sagaHelpers.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/selectors.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/specificActions.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils/constants.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils/lookupUtils.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils/lookupUtils.js-meta.xml',
  'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer/eventBuilderPageHeaderContainer.css',
  'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer/eventBuilderPageHeaderContainer.html',
  'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer/eventBuilderPageHeaderContainer.js'
]
const added = [
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/actionTypes.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/commonActions.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/specificActions.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils/lookupUtils.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils/lookupUtils.js-meta.xml'
]
const modified = [
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup/baseLookup.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupContainer/lookupContainer.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/getvalueSaga.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/helpers.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/lookup.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/lookups.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/public_api.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/sagaHelpers.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/selectors.js',
  'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer/eventBuilderPageHeaderContainer.css',
  'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer/eventBuilderPageHeaderContainer.html',
  'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer/eventBuilderPageHeaderContainer.js'
]
const removed = [
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup/service.js',
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule/actions.js'
]
const renamed = [
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils/constants.js'
]
const previous = [
  'force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup/constants.js'
]

export const changedFiles = {files, added, renamed, removed, previous, modified}
export default {
  deployPaths:
    '"force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule, \\\n' +
    'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils, \\\n' +
    'force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup, \\\n' +
    'force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupContainer, \\\n' +
    'force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer"',
  deployPathParts:
    '["force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupModule","force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupUtils","force-app/main/default/lwc/common/lwc/newLookup/lwc/baseLookup","force-app/main/default/lwc/common/lwc/newLookup/lwc/lookupContainer","force-app/main/default/lwc/scheduler/lwc/eventClass/lwc/builder/lwc/eventBuilderPageHeaderContainer"]',
  deletePaths: '""',
  deletePathParts: '[]'
}
