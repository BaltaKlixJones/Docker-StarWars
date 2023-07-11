const axios = require("axios");

module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Character");
    return response.data;
  },
  getById: async (id) => {
    const res = await axios.get(`http://database:8004/Character/${id}`);
    return res.data;
  },
  create: async (data) => {
    const res = await axios.post("http://database:8004/Character", data);
    return res.data;
  },
};
