const validateDataBlogPost = require('./validations/validateDataBlogPost');
const { BlogPost, PostCategory, Category } = require('../models');

const postBlogPostService = async (request) => {
    const { body } = request;
    const error = validateDataBlogPost.checkDataBlogPost(body);
    if (error) throw error;

    const findCategories = await Category.findAll({ where: { id: body.categoryIds } });
    if (findCategories.length !== body.categoryIds.length) {
        const e = { code: 400, message: 'one or more "categoryIds" not found' };
        throw e;
    }
    body.userId = request.user.id;
    body.published = new Date();
    body.updated = new Date();
    const result = await BlogPost.create(body);

    const categories = await findCategories.map((cat) => ({
        postId: result.id,
        categoryId: cat.id,
      }));

    await PostCategory.bulkCreate(categories);
    
    return result;
};

const getAllBlogPosts = async () => {
    const result = await BlogPost.findAll();
    return result;
};

module.exports = { postBlogPostService, getAllBlogPosts };