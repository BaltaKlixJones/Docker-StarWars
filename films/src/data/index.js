const Films = require("./films.json");

module.exports = {
  list: async () => {
    return Films;
  },
  create: async () => {
    throw new Error("Hay un error en la BDD en crear Films ");
  },
};
