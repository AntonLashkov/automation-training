module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(198);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(622));
exports.LIBS_FOLDER = 'libs';
exports.STATIC_RESOURCE_FOLDER = 'staticresources';
exports.LABELS_FOLDER = 'labels';
exports.FLEXI_PAGES_FOLDER = 'flexipages';
exports.FLOW_FOLDER = 'flows';
exports.LWC_FOLDER = 'lwc';
exports.AURA_FOLDER = 'aura';
exports.SOURCE_PATH = path_1.default.join('force-app', 'main', 'default');
exports.STATIC_RESOURCE_PATH = path_1.default.join(exports.SOURCE_PATH, exports.STATIC_RESOURCE_FOLDER);
exports.LABELS_PATH = path_1.default.join(exports.SOURCE_PATH, exports.LABELS_FOLDER);
exports.LABELS_METADATA = path_1.default.join(exports.SOURCE_PATH, exports.LABELS_FOLDER, 'CustomLabels.labels-meta.xml');


/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 198:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(470);
const utils_1 = __webpack_require__(611);
const converter_1 = __webpack_require__(538);
const constants_1 = __webpack_require__(32);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const all = JSON.parse(core_1.getInput('files'));
            const added = JSON.parse(core_1.getInput('files-added'));
            const modified = JSON.parse(core_1.getInput('files-modified'));
            const removed = JSON.parse(core_1.getInput('files-removed'));
            const renamed = JSON.parse(core_1.getInput('files-renamed'));
            const previous = JSON.parse(core_1.getInput('files-previous'));
            const mode = core_1.getInput('mode');
            core_1.debug(`
      Files:          ${all}
      Files added:    ${added}
      Files modified: ${modified}
      Files removed:  ${removed}
      Files renamed:  ${renamed}
      Files previous: ${previous}
    `);
            const converted = converter_1.convertToSfdxPath({
                files: all,
                modified,
                added,
                removed,
                renamed,
                previous
            }, mode);
            core_1.debug(`Deploy Paths: ${converted.deployPathParts}`);
            core_1.debug(`Delete Paths: ${converted.deletePathParts}`);
            core_1.setOutput('build-libs', utils_1.hasLibsChanges(all).toString());
            core_1.setOutput('has-labels', utils_1.hasLabelsChanges(all).toString());
            core_1.setOutput('labels-path', constants_1.LABELS_PATH);
            core_1.setOutput('deploy-paths', converted.deployPaths);
            core_1.setOutput('delete-paths', converted.deletePaths);
            core_1.setOutput('has-deletes', converted.hasDeletes);
            core_1.setOutput('has-changes', converted.hasChanges);
            core_1.setOutput('deploy-path-parts', converted.deployPathParts);
            core_1.setOutput('delete-path-parts', converted.deletePathParts);
        }
        catch (error) {
            core_1.setFailed(error.message);
        }
    });
}
run();


/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const os = __webpack_require__(87);
/**
 * Commands
 *
 * Command Format:
 *   ##[name key=value;key=value]message
 *
 * Examples:
 *   ##[warning]This is the user warning message
 *   ##[set-secret name=mypassword]definitelyNotAPassword!
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        // safely append the val - avoid blowing up when attempting to
                        // call .replace() if message is not a string for some reason
                        cmdStr += `${key}=${escape(`${val || ''}`)},`;
                    }
                }
            }
        }
        cmdStr += CMD_STRING;
        // safely append the message - avoid blowing up when attempting to
        // call .replace() if message is not a string for some reason
        const message = `${this.message || ''}`;
        cmdStr += escapeData(message);
        return cmdStr;
    }
}
function escapeData(s) {
    return s.replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function escape(s) {
    return s
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/]/g, '%5D')
        .replace(/;/g, '%3B');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const os = __webpack_require__(87);
const path = __webpack_require__(622);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable
 */
function exportVariable(name, val) {
    process.env[name] = val;
    command_1.issueCommand('set-env', { name }, val);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    command_1.issueCommand('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store
 */
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message
 */
function error(message) {
    command_1.issue('error', message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message
 */
function warning(message) {
    command_1.issue('warning', message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store
 */
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 538:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(622));
const constants_1 = __webpack_require__(32);
const utils_1 = __webpack_require__(611);
function convertToSfdxPath({ files, added, modified, removed, renamed, previous }, mode = 'develop') {
    let deployMetadata = new Set([...added, ...modified, ...renamed]
        .filter((file) => utils_1.isSourceFile(file))
        .map((file) => utils_1.getMetadataPath(file)));
    let deleteMetadata = new Set();
    for (const file of [...removed, ...previous].filter((f) => utils_1.isSourceFile(f))) {
        if (utils_1.isSpecificMetadataPath(file) && path_1.default.extname(file) !== '.xml') {
            deployMetadata.add(utils_1.getCommonMetadataPath(file));
        }
        else {
            deleteMetadata.add(utils_1.getMetadataPath(file));
        }
    }
    // if we have some changes in libs folder redeploy all static resources
    if (utils_1.hasLibsChanges(files)) {
        deployMetadata = new Set([...deployMetadata].filter(file => !utils_1.isStaticresourceMetadataPath(file)));
        deployMetadata.add(path_1.default.join(constants_1.SOURCE_PATH, constants_1.STATIC_RESOURCE_FOLDER));
    }
    deployMetadata = new Set([...deployMetadata].filter((file) => !deleteMetadata.has(file)));
    if (mode === 'package') {
        deleteMetadata = new Set([...deleteMetadata].filter((file) => !utils_1.isNotPackageDeleteable(file)));
    }
    return {
        deployPaths: `"${Array.from(deployMetadata).join(', \\\n')}"`,
        deployPathParts: JSON.stringify(Array.from(deployMetadata)),
        deletePaths: `"${Array.from(deleteMetadata).join(', \\\n')}"`,
        deletePathParts: JSON.stringify(Array.from(deleteMetadata)),
        hasDeletes: (deleteMetadata.size > 0).toString(),
        hasChanges: (deployMetadata.size > 0).toString()
    };
}
exports.convertToSfdxPath = convertToSfdxPath;


/***/ }),

/***/ 611:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(622));
const constants_1 = __webpack_require__(32);
/**
 * Check if in list of changed files we have files from libs directory
 * @param files list of changed files
 * @returns boolean as string
 */
function hasLibsChanges(files = []) {
    return files.some(file => file.includes(constants_1.LIBS_FOLDER));
}
exports.hasLibsChanges = hasLibsChanges;
function isSourceFile(file) {
    return file.includes(constants_1.SOURCE_PATH);
}
exports.isSourceFile = isSourceFile;
function isLibsFile(file) {
    return (!isSourceFile(file) &&
        path_1.default
            .dirname(file)
            .split(path_1.default.sep)
            .includes(constants_1.LIBS_FOLDER));
}
exports.isLibsFile = isLibsFile;
function isNotPackageDeleteable(file) {
    return (file.includes(`${path_1.default.sep}${constants_1.FLOW_FOLDER}${path_1.default.sep}`) ||
        file.includes(`${path_1.default.sep}${constants_1.FLEXI_PAGES_FOLDER}${path_1.default.sep}`));
}
exports.isNotPackageDeleteable = isNotPackageDeleteable;
function isLightningMetadataPath(file) {
    return (file.includes(`${path_1.default.sep}${constants_1.AURA_FOLDER}${path_1.default.sep}`) ||
        file.includes(`${path_1.default.sep}${constants_1.LWC_FOLDER}${path_1.default.sep}`));
}
exports.isLightningMetadataPath = isLightningMetadataPath;
function isStaticresourceMetadataPath(file) {
    return file.includes(`${path_1.default.sep}${constants_1.STATIC_RESOURCE_FOLDER}${path_1.default.sep}`);
}
exports.isStaticresourceMetadataPath = isStaticresourceMetadataPath;
function isSpecificMetadataPath(file) {
    return isLightningMetadataPath(file) || isStaticresourceMetadataPath(file);
}
exports.isSpecificMetadataPath = isSpecificMetadataPath;
function getCommonMetadataPath(file) {
    const filePathParts = path_1.default.extname(file)
        ? path_1.default.dirname(file).split(path_1.default.sep)
        : file.split(path_1.default.sep);
    const metadataFolderIndex = +((filePathParts.includes(constants_1.AURA_FOLDER) &&
        filePathParts.indexOf(constants_1.AURA_FOLDER)) ||
        (filePathParts.includes(constants_1.LWC_FOLDER) &&
            filePathParts.lastIndexOf(constants_1.LWC_FOLDER)) ||
        (filePathParts.includes(constants_1.STATIC_RESOURCE_FOLDER) &&
            filePathParts.indexOf(constants_1.STATIC_RESOURCE_FOLDER)));
    return filePathParts.slice(0, metadataFolderIndex + 2).join(path_1.default.sep);
}
exports.getCommonMetadataPath = getCommonMetadataPath;
function getStaticresourceMetadataPath(file) {
    if (path_1.default.extname(file) === '.xml') {
        return path_1.default.join(path_1.default.dirname(file), path_1.default.basename(file).split('.')[0]);
    }
    return getCommonMetadataPath(file);
}
exports.getStaticresourceMetadataPath = getStaticresourceMetadataPath;
function getMetadataPath(file) {
    return ((isLightningMetadataPath(file) && getCommonMetadataPath(file)) ||
        (isStaticresourceMetadataPath(file) &&
            getStaticresourceMetadataPath(file)) ||
        file);
}
exports.getMetadataPath = getMetadataPath;
function isLabelsPath(file) {
    return file.includes(constants_1.LABELS_PATH);
}
exports.isLabelsPath = isLabelsPath;
function hasLabelsChanges(files) {
    return files.some(file => isLabelsPath(file));
}
exports.hasLabelsChanges = hasLabelsChanges;


/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ })

/******/ });