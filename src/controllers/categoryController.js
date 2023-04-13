const categoryServices = require('../services/categoryServices');

const postCategory = async (request, response) => {
    try {
        const result = await categoryServices.postCategoryService(request);
        return response.status(201).json(result);
    } catch (error) {
        return response.status(error.code).json({ message: error.message }); 
    }
};

module.exports = { postCategory };