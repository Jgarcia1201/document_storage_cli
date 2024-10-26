const { displayPrettyConsoleMessage } = require("../util/makeThingsPretty.js")
const { CONSTANTS } = require("../constants.js")
const { createFile, deleteFile, listDirectory, moveFile } = require("../commands/index.js")
const { parseInput } = require("./filepathHelpers.js")

function handleUserInput(inputStr) {
    const {
        isValid,
        command,
        filename,
        destination
    } = parseInput(inputStr.trim())

    if (!isValid) return false

    const commandParams = {
        command,
        filename,
        destination
    }


    const didCommandSucceed = executeCommand(commandParams)

    return {
        didCommandSucceed,
        command,
        filename
    }
}

function executeCommand(commandParams) {
    const { command, filename, destination: maybeDestination } = commandParams
    switch (command) {
        case CONSTANTS.COMMANDS.CREATE: return createFile(filename)
        case CONSTANTS.COMMANDS.LIST: return listDirectory()
        case CONSTANTS.COMMANDS.MOVE: return moveFile(filename, maybeDestination)
        case CONSTANTS.COMMANDS.DELETE: return deleteFile(filename)
        case CONSTANTS.COMMANDS.CLOSE: false
        default: 
            displayPrettyConsoleMessage(CONSTANTS.MESSAGES.ERROR)
            return false
    }
}

module.exports = handleUserInput


