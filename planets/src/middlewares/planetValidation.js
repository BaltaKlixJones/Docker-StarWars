const { PlanetError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else throw new PlanetError("Error en el nombre del planeta", 401);
};
