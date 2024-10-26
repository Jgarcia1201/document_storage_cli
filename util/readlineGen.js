const readline = require('readline');

const generateReadLineInterface = () => {
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Enter Action: ',
    })
}

module.exports = generateReadLineInterface
