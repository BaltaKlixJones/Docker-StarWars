const { catchedAsync } = require("../../utils");

module.exports = {
  getModel: catchedAsync(require("./getModel")),
  getModelById: catchedAsync(require("./getModelById")),
  postModel: catchedAsync(require("./postModel")),
  deleteModel: catchedAsync(require("./deleteModel")),
};
