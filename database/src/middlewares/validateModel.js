const { ModelError, PostError, DeleteError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const validModels = ["Character", "Film", "Planet"];
  const { method } = req;
  const { model } = req.params;
  const { id } = req.params;

  if (method === "GET") {
    if (validModels.includes(model)) {
      return next();
    } else {
      throw new ModelError("Invalid model", 401);
    }
  } else if (method === "POST") {
    const {_id, name, title } = req.body;
    if (!_id) {
      throw new PostError("Id is necesary", 401);
    }
    if (model === validModels[0] && !name) {
      throw new PostError("Name is necesary", 401);
    }
    if (model === validModels[1] && !title) {
      throw new PostError("Title is necesary", 401);
    } else {
      return next();
    }
  } else if (method === "DELETE") {
    if (!id) {
      throw new DeleteError("Invalid ID", 401);
    } else if (!validModels.includes(model)) {
      throw new DeleteError("Invalid model", 401);
    } else {
      return next();
    }
  }
};
