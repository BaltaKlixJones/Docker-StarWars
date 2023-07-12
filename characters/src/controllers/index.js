const {catchedAsync} = require('../utils');

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    getById: catchedAsync(require('./getById')),
    createCharacter: catchedAsync(require('./createCharacter')),
    deleteCharacter: catchedAsync(require('./deleteCharacter'))
}