const Character = require("../data");
const response = require("../utils/response");

module.exports = async (req, res) => {
    const newCharacter = await Character.create();
    response(res, 201, newCharacter);
 
};
