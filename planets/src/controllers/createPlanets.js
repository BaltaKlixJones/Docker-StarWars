const Plantes = require('../data');
const response = require('../utils/response');


module.exports = async (req,res) => {
const newPlanet = await Plantes.create();
response (res, 201, newPlanet)
}