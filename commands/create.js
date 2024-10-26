const { CONSTANTS } = require('../constants.js')
const { getDirectory, putDirectory } = require('../service/dbService.js')
const { checkForExistenceOfFilepath, insertFilepath } = require('../util/filepathHelpers.js')
const { handleExistingFilePathOnCreation, handleUnsuccessfulDbWrite } = require("../util/errors.js")

function createFile(filepath) {
    const currentDirectory = getDirectory()
    const filePathExists = checkForExistenceOfFilepath(currentDirectory, filepath, CONSTANTS.COMMANDS.CREATE)

    if (filePathExists) {
        handleExistingFilePathOnCreation(filepath)
        return false
    }

    const updatedDirectory = insertFilepath(currentDirectory, filepath)
    const didDbWriteSucceed = putDirectory(updatedDirectory)

    if (!didDbWriteSucceed) {
        handleUnsuccessfulDbWrite(CONSTANTS.COMMANDS.CREATE, filepath)
    }

    return didDbWriteSucceed
}

module.exports = createFile