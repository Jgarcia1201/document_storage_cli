const { CONSTANTS } = require("../constants.js")
const { handleMissedFilePath } = require("./errors.js")

function checkForExistenceOfFilepath(currentDirectory, filepath, command) {
    let dir = currentDirectory
    const dirNames = filepath.split("/")
    for (const name of dirNames) {
        if (!dir[name]) {
            handleMissedFilePath({
                filepath,
                command,
                dirName: name
            })
            return false
        }
        dir = dir[name]
    }
    return true
}

function parseInput(inputStr) {
    const lowercase = inputStr.toLowerCase()
    const doesStrHaveSpace = lowercase.indexOf(" ") !== -1
    const isListCommand = CONSTANTS.COMMANDS.LIST === lowercase
    const isCloseCommand = CONSTANTS.COMMANDS.CLOSE === lowercase
    const commandNeedsSpace = !isListCommand && !isCloseCommand

    if (!doesStrHaveSpace && commandNeedsSpace) {
        console.log(`Invalid input - ${inputStr}`)
        return {
            isValid: false,
            command: undefined,
            filename: inputStr
        }
    }

    const [command, filename, destination = undefined] = inputStr.split(" ")

    const isValidCommand = Object.values(CONSTANTS.COMMANDS).includes(command)

    if (!isValidCommand) {
        console.log(`Invalid command - ${command}`)
        return {
            isValid: false,
            command,
            filename
        }
    }

    const isValidMoveCommand = destination && command === CONSTANTS.COMMANDS.MOVE

    if (isValidMoveCommand) {
        return {
            isValid: true,
            command,
            filename,
            destination
        }
    }

    return {
        isValid: true,
        command,
        filename
    }
}

function insertFilepath(currentDirectory, filepath) {
    let toReturn = currentDirectory
    const fileNames = filepath.split("/")
    for (const file of fileNames) {
        if (!toReturn[file]) {
            toReturn[file] = {};
        }
        toReturn = toReturn[file];
    }
    return currentDirectory
}

function deleteFilepath(currentDirectory, filepath) {
    let toReturn = currentDirectory
    const fileNames = filepath.split("/")
    for (const [index, file] of fileNames.entries()) {
        if (index === fileNames.length - 1) {
            delete toReturn[file]
        }
        toReturn = toReturn[file]
    }
    return currentDirectory
}

/* 
    NOTE: This function is pretty fragile, a filepath with duplicate names in it
    such as a/a/a would break this. 
*/
function moveFilepath(currentDirectory, filepath, destination) {
    const files = filepath.split("/")
    const fileToMove = files[files.length - 1]
    const targetFile = getTargetFileFromPath(currentDirectory, filepath)
    let currentDir = currentDirectory
    const objectToMove = { [fileToMove]: targetFile }
    const destinationFiles = destination.split("/")
    const finalDestination = destinationFiles[destinationFiles.length - 1]

    for (const file of destinationFiles) {
        if (file === finalDestination) {
            currentDir[finalDestination] = { ...currentDir[finalDestination], ...objectToMove }
        }
        currentDir = currentDir[file]

    }
    return deleteFilepath(currentDirectory, filepath)
}

function getTargetFileFromPath(currentDirectory, filepath) {
    const parts = filepath.split('/');
    let current = currentDirectory;
    for (const part of parts) {
        if (current[part]) {
            current = current[part];
        } else {
            return null;
        }
    }
    return current;
}

module.exports = {
    checkForExistenceOfFilepath,
    parseInput,
    insertFilepath,
    deleteFilepath,
    moveFilepath
}