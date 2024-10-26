const { CONSTANTS } = require("../constants")
const { getDirectory, putDirectory } = require("../service/dbService")
const { checkForExistenceOfFilepath, moveFilepath } = require("../util/filepathHelpers")

function moveFile(filepath, destination) {
    if (filepath === destination) {
        console.log(`${CONSTANTS.MESSAGES.COULD_NOT_MOVE} - ${filepath}`)
        return false
    }

    const currentDirectory = getDirectory()
    const filePathExists = checkForExistenceOfFilepath(currentDirectory, filepath, CONSTANTS.COMMANDS.MOVE)

    if (!filePathExists) {
        return false
    }

        const updatedDirectory = moveFilepath(currentDirectory, filepath, destination)
        const didDbWriteSucceed = putDirectory(updatedDirectory)

        if (!didDbWriteSucceed) {
            console.log(`${CONSTANTS.MESSAGES.COULD_NOT_MOVE} - ${filepath} to ${destination}`)
            return didDbWriteSucceed
        }

        return didDbWriteSucceed
}

module.exports = moveFile