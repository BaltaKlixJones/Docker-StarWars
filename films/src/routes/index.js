const {Router} = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', controllers.getFilms)
router.post('/', controllers.createFilms)

module.exports = router;