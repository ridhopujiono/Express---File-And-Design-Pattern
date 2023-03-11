const express = require('express'); // require the express module
const router = express.Router(); // express router
const userController = require('../controllers/user-controller.js'); // require the user-controller
const multer = require('multer');
const formData = multer();

router.get('/', userController.index);
router.get('/:id', userController.findById);
router.post('/', formData.none(), userController.store);
router.put('/:id', formData.none(), userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;