const CONSTANTS = {
        PROMPTS: {
            GET_COMMAND: "Please Enter a Command: "
        },
        MESSAGES: {
            INTRO: "Directory Manager",
            INVALID_INPUT: "Invalid input",
            INVALID_COMMAND: "Invalid comand",
            COULD_NOT_MOVE: "Could not move",
            EXIT: "Exiting Directory Manager",
            COULD_NOT_CREATE: "Could not create directory",
            COULD_NOT_DELETE: "Could not delete directory",
        },
        SPACERS: {
            LINE_DOTTED: "-------------------------------------",
            LINE_SOLID: "______________________________________"
        },
        COMMANDS: {
            CREATE: 'create',
            LIST: 'list',
            MOVE: 'move',
            DELETE: 'delete',
            CLOSE: 'close'
        }
}

module.exports = { CONSTANTS }