const {catchedAsync } = require('../utils')

module.exports = {
    getPlanets:  catchedAsync(require('./getPlanets')),
    createPlantes: catchedAsync(require('./createPlanets'))
}