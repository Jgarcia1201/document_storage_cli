const { CONSTANTS } = require('../constants.js')
const { getDirectory, putDirectory } = require('../service/dbService.js')
const { handleUnsuccessfulDbWrite } = require('../util/errors.js')
const { checkForExistenceOfFilepath, deleteFilepath } = require('../util/filepathHelpers.js')

function deleteFile(filepath) {
    const currentDirectory = getDirectory()
    const filePathExists = checkForExistenceOfFilepath(currentDirectory, filepath, CONSTANTS.COMMANDS.DELETE)

    if (!filePathExists) {
        return false
    }

    const updatedDirectory = deleteFilepath(currentDirectory, filepath)
    const didDbWriteSucceed = putDirectory(updatedDirectory)

    if (!didDbWriteSucceed) {
        handleUnsuccessfulDbWrite(CONSTANTS.COMMANDS.DELETE, filepath)
    }
    return didDbWriteSucceed // true
}

module.exports = deleteFile