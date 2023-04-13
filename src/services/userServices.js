const { genToken } = require('../utils/auth');
const { User } = require('../models');
const validateDatauser = require('./validations/validateDatauser');

const postUserService = async (request) => {
    const { body } = request;
    const error = validateDatauser.checkDataUser(body);
   
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

const getAllUsersServices = async () => {
    const result = await User.findAll({
        attributes: { exclude: ['password'] },
      });
      return result;
};

const getUserIdServices = async (request) => {
    const { id } = request.params;
    const result = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
      });
      return result;
};

module.exports = { postUserService, getAllUsersServices, getUserIdServices };