const { getDirectory } = require("../service/dbService")

function listDirectory(currentDirectory = getDirectory(), indent = '') {
    const alphabetizedDir = alphabetizeDirectory(currentDirectory)
    for (const key in alphabetizedDir) {
        console.log(indent + key);
        listDirectory(alphabetizedDir[key], indent + '   ');
    }
}

function alphabetizeDirectory(currentDirectory) {
    return Object.keys(currentDirectory).sort().reduce((sortedObj, key) => {
        if (typeof currentDirectory[key] === 'currentDirectoryect') {
            sortedObj[key] = alphabetizeObject(currentDirectory[key])
        } else {
            sortedObj[key] = currentDirectory[key];
        }
        return sortedObj;
    }, {})
}

module.exports = listDirectory
