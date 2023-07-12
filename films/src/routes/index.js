const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/:id', controllers.getById);
router.get('/', controllers.getFilms)
router.post('/', middlewares.filmsValidation, controllers.createFilms)
router.delete("/:id", controllers.deleteFilms)

module.exports = router;