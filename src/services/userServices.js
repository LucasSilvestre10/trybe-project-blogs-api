const { genToken } = require('../utils/auth');
const { User } = require('../models');
const validateDataLogin = require('./validations/validateDataLogin');

const postUserService = async (request) => {
    const { body } = request;
    const error = validateDataLogin.checkDataUser(body);
   
    if (error) {
        const e = { code: 400, message: error.message };
        throw e; 
    }
    const { email } = request.body;   
    const getUser = await User.findOne({ where: { email } });  
   
    if (getUser) {
        const e = { code: 409, message: 'User already registered' };
        throw e;
    }
    const result = await User.create(body);
   
    const token = genToken(result);
    return token;
};

module.exports = { postUserService };