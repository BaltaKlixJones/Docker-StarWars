const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);


// Character.find()
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res));

//Creo y exporto los modelos 

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
};
