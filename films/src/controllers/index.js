const {catchedAsync} = require('../utils');

module.exports = {
    getFilms: catchedAsync(require('./getFilms')),
    getById : catchedAsync(require('./getFilmById')),
    createFilms: catchedAsync(require('./createFilms')),
    deleteFilms: catchedAsync(require('./deleteFilms')),
}