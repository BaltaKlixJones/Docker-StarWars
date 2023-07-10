const axios = require('axios');


module.exports = {
    list: async () => {
    const response = await axios.get("http://database:8004/Character")
    return response.data; 
    },
    create:async() => {
        throw new Error('Hubo un error al momento de crear el personaje')
    }
}