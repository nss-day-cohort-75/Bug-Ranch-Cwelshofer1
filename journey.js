const { randomize } = require("./utils.js")

const createRivers = () => {
    const rivers = Math.floor(Math.random() * 0) + 1
    return rivers
}

const createMountains = () => {
    const mountains = Math.floor(Math.random() * 0) + 1
    return mountains
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 0) + 1
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 0) + 1
    return plains
}

const journeyMaker = () => {
    const journey = []

    const areas = {
        rivers: createRivers(),
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) {
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plains")
    }

    return randomize(journey)
}

module.exports = {
    journeyMaker
}