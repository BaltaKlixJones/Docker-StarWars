const {catchedAsync } = require('../utils')

module.exports = {
    getPlanets:  catchedAsync(require('./getPlanets')),
    getById: catchedAsync(require('./getById')),
    createPlantes: catchedAsync(require('./createPlanets')),
    deletePlanets : catchedAsync(require('./deletePlanets'))
}