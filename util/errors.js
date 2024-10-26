const { CONSTANTS } = require("../constants");

function handleMissedFilePath({filepath, command, dirName}) {
    if (command === CONSTANTS.COMMANDS.CREATE) return // Good thing when creating a file
    console.log(`Cannot ${command} ${filepath} - ${dirName} does not exist`) // Bad thing every other command
}

function handleExistingFilePathOnCreation(filepath) {
    console.log(`Cannot ${CONSTANTS.COMMANDS.CREATE} - ${filepath} already exists`)
}

function handleUnsuccessfulDbWrite(command, filepath) {
    const errMessage = dbErrMessageMap[command]
    console.log(`${errMessage} - ${filepath}`)
}

const dbErrMessageMap = {
    [CONSTANTS.COMMANDS.CREATE]: CONSTANTS.MESSAGES.COULD_NOT_CREATE,
    [CONSTANTS.COMMANDS.DELETE]: CONSTANTS.MESSAGES.COULD_NOT_DELETE,
    [CONSTANTS.COMMANDS.MOVE]: CONSTANTS.MESSAGES.COULD_NOT_MOVE,
}

module.exports = {
    handleMissedFilePath,
    handleExistingFilePathOnCreation,
    handleUnsuccessfulDbWrite
}