const Plantes = require("../data");
const response = require("../utils/response");

module.exports = async (req, res) => {
  const { name, _id } = req.body;
  const newPlanet = await Plantes.create({ _id, name });
  response(res, 201, newPlanet);
};
