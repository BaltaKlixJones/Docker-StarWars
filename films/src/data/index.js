const axios = require('axios');


module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Film")
    return response.data;
  },
  getById: async (id) => {
   const res = await axios.get(`http://database:8004/Film/${id}`)
   return res.data
  },
  create: async (data) => {
    const res =  await axios.post("http://database:8004/Film", data)
    return res.data
  },
};
