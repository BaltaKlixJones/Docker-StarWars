const { Router } = require("express");
const controller = require("../controllers");
const {validateModel} = require("../middlewares");

const router = Router();

router.post("/:model", validateModel, controller.postModel);

router.get("/:model", validateModel, controller.getModel);

router.get("/:model/:id", validateModel, controller.getModelById);

module.exports = router;
