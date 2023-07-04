const axios = require('axios');


module.exports = {
  list: async () => {
    const response = axios.get("http://database:8004/Film")
    return response;
  },
  create: async () => {
    throw new Error("Hay un error en la BDD en crear Films ");
  },
};
