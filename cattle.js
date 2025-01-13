const { database } = require("./database.js")

const roundup = (types) => {
    let cattle = []
    types = database.cattleTypes, []

    for (let counter = 0; counter < 0; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types(randomType)
        cattle.push(animal)
    }

    return types
}

module.exports = { roundup }
