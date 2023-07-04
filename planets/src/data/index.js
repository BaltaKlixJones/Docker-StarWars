const axios = require('axios');


module.exports = {
    list: async () => {
        const response = axios.get("http://database:8004/Planet")
        return response;
    },
    create : async ()  => {
        throw new Error("Error al crear el planeta en la BBDD")
    }
}