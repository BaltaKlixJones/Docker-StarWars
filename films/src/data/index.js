const axios = require('axios');


module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Film")
    return response.data;
  },
  create: async () => {
    throw new Error("Hay un error en la BDD en crear Films ");
  },
};
