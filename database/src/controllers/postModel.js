const store = require("../database");
const { response } = require("../../utils");

module.exports = async (req, res, next) => {
  const { model } = req.params;
  const {name, _id, title} = req.body;
  const storeResponse = await store[model].insert(data = {name, _id , title});
  res.status(201).json(storeResponse);
};
