const { genToken } = require('../utils/auth');
const { User } = require('../models');
const validateDataLogin = require('./validations/validateDataLogin');

const postLoginCreateTokenService = async (request) => {
    const { body } = request;
    const error = validateDataLogin.checkData(body);
    if (error) throw error.message;
    const { email } = request.body;   
    const getUser = await User.findOne({ where: { email } });    
    if (!getUser) {
        const errorMessage = 'Invalid fields';
        throw errorMessage;
    }
    const result = genToken(getUser);
    return result;
};

module.exports = { postLoginCreateTokenService };