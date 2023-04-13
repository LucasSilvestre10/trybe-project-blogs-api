const categoryServices = require('../services/categoryServices');

const postCategory = async (request, response) => {
    try {
        const result = await categoryServices.postCategoryService(request);
        return response.status(201).json(result);
    } catch (error) {
        return response.status(error.code).json({ message: error.message }); 
    }
};

const getAllCategories = async (_request, response) => {
    const result = await categoryServices.getAllCategoriesService();
    return response.status(200).json(result);
}; 

module.exports = { postCategory, getAllCategories };