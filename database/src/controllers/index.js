const { catchedAsync } = require("../../utils");

module.exports = {
  getModel: catchedAsync(require("./getModel")),
  getoModelById: catchedAsync(require("./getModelById")),
};
