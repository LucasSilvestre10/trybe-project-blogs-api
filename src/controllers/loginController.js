const loginServices = require('../services/loginServices');

const postLoginCreateToken = async (request, response) => {
    try {
        const result = await loginServices.postLoginCreateTokenService(request);
    return response.status(200).json({ token: result });
    } catch (error) {        
        return response.status(400).json({ message: error });
    }
};

module.exports = { postLoginCreateToken };