const { FilmsError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const {_id, title } = req.body;
    if (_id && title) return next()
    else throw new FilmsError("Error en el nombre", 401)
}