const { response } = require("../../utils");
const store = require("../database");

module.exports = async (req, res, next) => {
  const { model, id } = req.params;
  const deleteModel = await store[model].delete(id);
  response(res, 200, deleteModel);
};
