const router = require('express').Router();
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const categoryController = require('../controllers/categoryController');

router.use(authTokenMiddleware);
router.post('/categories', categoryController.postCategory);

module.exports = router;