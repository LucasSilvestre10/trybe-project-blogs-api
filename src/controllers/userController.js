const userServices = require('../services/userServices');

const postUser = async (request, response) => {
    try {
        const result = await userServices.postUserService(request);
        return response.status(201).json({ token: result });
    } catch (error) {        
        return response.status(error.code).json({ message: error.message });
    }
}; 

module.exports = { postUser };