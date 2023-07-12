const Films = require('../data');
const response = require('../utils/response');

module.exports = async (req, res) => {
    const {title, _id} = req.body
    const newFilm = await Films.create({_id, title})
    response(res, 201, newFilm)
}