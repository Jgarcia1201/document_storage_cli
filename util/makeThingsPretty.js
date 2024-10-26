const { CONSTANTS } = require("../constants.js")

function emptySpace(numberOfLines = 2) {
    for (let i = 0; i <= numberOfLines; i++) {
        console.log("")
    }
}

function displayIntro() {
    emptySpace(1)
    const introString = CONSTANTS.MESSAGES.INTRO
    console.log(introString)
    console.log(CONSTANTS.SPACERS.LINE_DOTTED)
    emptySpace(2)
}

function displayPrettyConsoleMessage(message) {
    console.log(CONSTANTS.SPACERS.LINE_DOTTED)
    console.log(message)
    console.log(CONSTANTS.SPACERS.LINE_DOTTED)
}

module.exports = {
    displayIntro,
    displayPrettyConsoleMessage
}