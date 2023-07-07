const { DeleteError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { model } = req.params;

  const validModels = ["Character", "Film", "Planet"];
  if (!id) {
    throw new DeleteError("Invalid ID", 401);
  } else if (!validModels.includes(model)) {
    throw new DeleteError("Invalid model", 401);
  } else {
    return next();
  }
};
