const axios = require("axios");

module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Planet");
    return response.data;
  },
  getById: async (id) => {
    const res = await axios.get(`http://database:8004/Planet/${id}`);
    return res.data;
  },
  create: async (data) => {
    const res = await axios.post("http://database:8004/Planet", data);
    return res.data;
  },
};
