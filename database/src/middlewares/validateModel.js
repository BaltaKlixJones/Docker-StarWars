const { ModelError, PostError, DeleteError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const validModels = ["Character", "Film", "Planet"];

  const { method } = req;
  if (method === "GET") {
    const { model } = req.params;
    if (validModels.includes(model)) {
      return next();
    } else {
      throw new ModelError("Invalid model", 401);
    }
  } else if (method === "POST") {
    const { _id, name } = req.body;
    if (!_id || !name) {
      throw new PostError("Invalid data", 401);
    } else {
      return next();
    }
  } else if (method === "DELETE") {
    const { id, model } = req.params;

    const validModels = ["Character", "Film", "Planet"];

    if (!id) {
      throw new DeleteError("Invalid ID", 401);
    } else if (!validModels.includes(model)) {
      throw new DeleteError("Invalid model", 401);
    } else {
      return next();
    }
  }
};
