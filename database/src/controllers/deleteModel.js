const store = require("../database");

module.exports = async (req, res, next) => {
  const { model, id } = req.params;
  const deleteModel = await store[model].delete(id);
  res.status(200).json(deleteModel);
};
