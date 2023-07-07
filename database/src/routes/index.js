const { Router } = require("express");
const controller = require("../controllers");
const {validateModel, postModelValidate, deleteModelValidate} = require("../middlewares");

const router = Router();

router.post("/:model", postModelValidate, controller.postModel);

router.get("/:model", validateModel, controller.getModel);

router.get("/:model/:id", validateModel, controller.getModelById);

router.delete("/:model/:id", deleteModelValidate, controller.deleteModel)

module.exports = router;
