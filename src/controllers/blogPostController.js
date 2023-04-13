const blogPostServices = require('../services/blogPostServices');

const postBlogPost = async (request, response) => {
    try {
        const result = await blogPostServices.postBlogPostService(request);
        return response.status(201).json(result);      
    } catch (error) {
        return response.status(error.code).json({ message: error.message });
    }
};

module.exports = { postBlogPost };