const { Router } = require("express");
const store = require("../database");
const controller = require("../controllers");
const {validateModel} = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, controller.getModel);

router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

module.exports = router;
