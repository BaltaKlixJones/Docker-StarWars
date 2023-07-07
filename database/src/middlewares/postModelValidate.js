const { PostError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const validModels = ["Character", "Film", "Planet"];
  const { model } = req.params;
  const { name, _id, title } = req.body;

  if (!validModels.includes(model)) {
    throw new PostError("Invalid model", 401);
  }
  if (!_id) {
    throw new PostError("Id is necesary", 401);
  }
  if (
    (model === validModels[0] && !name) ||
    (model === validModels[2] && !name)
  ) {
    throw new PostError(`Name is necesary in ${model}`, 401);
  }
  if (model === validModels[1] && !title) {
    throw new PostError("Title is necesary in Films", 401);
  } else {
    return next();
  }
};
