const store = require("../database");
const { response } = require("../../utils");

module.exports = async (req, res, next) => {
  const { model } = req.params;
  const data = req.body;
  const storeResponse = await store[model].insert(data);
  response(res, 201, storeResponse);
};
