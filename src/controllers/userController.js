const userServices = require('../services/userServices');

const postUser = async (request, response) => {
    try {
        const result = await userServices.postUserService(request);
        return response.status(201).json({ token: result });
    } catch (error) {        
        return response.status(error.code).json({ message: error.message });
    }
}; 

const getAllUsers = async (_request, response) => {
   const result = await userServices.getAllUsersServices();
   return response.status(200).json(result);
};

module.exports = { postUser, getAllUsers };