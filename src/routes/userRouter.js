const router = require('express').Router();
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const userController = require('../controllers/userController');

router.post('/user', userController.postUser);
router.use(authTokenMiddleware);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserId);

module.exports = router;