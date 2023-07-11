const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/:id", controllers.getById);
router.get("/", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.createCharacter);

module.exports = router;
