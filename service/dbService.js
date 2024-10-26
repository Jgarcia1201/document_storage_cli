const fs = require('fs')
const path = require('path')

const dbPath = "../db/db.json"

function getDirectory() {
    const data = fs.readFileSync(path.join(__dirname, dbPath))
    return JSON.parse(data)
}

function putDirectory(updatedDirectory) {
    try {
        fs.writeFileSync(path.join(__dirname, dbPath), JSON.stringify(updatedDirectory, null, 2))
        return true
    } catch (err) {
        return false
    }
}

module.exports = { getDirectory, putDirectory }
