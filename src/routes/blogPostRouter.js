const router = require('express').Router();
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const blogPostController = require('../controllers/blogPostController');

router.use(authTokenMiddleware);

router.post('/post', blogPostController.postBlogPost);

module.exports = router;