const {Router} = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', controllers.getPlanets)
router.post('/', controllers.createPlantes)

module.exports = router;