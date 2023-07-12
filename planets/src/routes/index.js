const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/:id", controllers.getById);
router.get("/", controllers.getPlanets);
router.post("/", middlewares.planetValidation, controllers.createPlantes);
router.delete("/:id", controllers.deletePlanets);
module.exports = router;
