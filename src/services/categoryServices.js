const validateDataCategory = require('./validations/validateDataCategory');
const { Category } = require('../models');

const postCategoryService = async (request) => {
    const { body } = request;
    const error = validateDataCategory.checkDataCategory(body);
    if (error) throw error;
    
    const result = await Category.create(body);
    return result;
};

module.exports = { postCategoryService };