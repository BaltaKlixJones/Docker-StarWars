const store = require("../database");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const storeResponse = await store[model].get(id);
  res.status(200).json(storeResponse);
};
