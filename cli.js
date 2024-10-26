const generateReadLineInterface = require("./util/readlineGen.js");
const { CONSTANTS } = require("./constants.js")
const { displayIntro, displayPrettyConsoleMessage } = require("./util/makeThingsPretty.js")
const handleUserInput = require("./util/input.js")

const rl = generateReadLineInterface()

displayIntro()

rl.prompt()

rl.on('line', (input) => {
    const {
        didCommandSucceed,
        command,
        filepath
    } = handleUserInput(input)

    if (command === CONSTANTS.COMMANDS.CLOSE) rl.close()

    rl.prompt()
})

rl.on('close', () => {
    displayPrettyConsoleMessage(CONSTANTS.MESSAGES.EXIT)
    process.exit(0)
})








