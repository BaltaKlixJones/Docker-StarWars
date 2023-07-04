const { ModelError, PostError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const { method } = req;
  if (method === "GET") {
    const { model } = req.params;
    if (["Character", "Film", "Planet"].includes(model)) {
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
  }
};
