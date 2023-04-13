const router = require('express').Router();
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const userController = require('../controllers/userController');

router.post('/user', userController.postUser);

router.get('/user', authTokenMiddleware, userController.getAllUsers);

module.exports = router;