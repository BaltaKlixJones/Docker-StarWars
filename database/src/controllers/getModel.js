const store = require("../database")
const {response} = require("../../utils")

module.exports = async (req, res) => {
    const {model} = req.params
    const responseStore =  await store[model].list();
    res.status(200).json(responseStore);
}