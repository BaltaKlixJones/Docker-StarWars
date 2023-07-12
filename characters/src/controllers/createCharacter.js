const Character = require("../data");
const response = require("../utils/response");

module.exports = async (req, res) => {
    const { name, _id } = req.body;
    const newCharacter = await Character.create({ _id, name });
    response(res, 201, newCharacter);
};
