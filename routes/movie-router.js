const express = require('express'); // require the express module
const router = express.Router(); // express router
const movieController = require('../controllers/movie-controller.js'); // require the movie-controller

router.get('/', movieController.index);
router.get('/:id', movieController.findById);
router.post('/', movieController.store); // require file params for upload file
router.put('/:id', movieController.update);
router.delete('/:id', movieController.destroy);

module.exports = router;