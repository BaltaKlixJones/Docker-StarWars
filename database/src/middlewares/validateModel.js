const { ModelError, PostError, DeleteError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const validModels = ["Character", "Film", "Planet"];
  const { model } = req.params;
  
    if (validModels.includes(model)) {
      return next();
    } else {
      throw new ModelError("Invalid model", 401);
    }
  
};
