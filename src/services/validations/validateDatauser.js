const Joi = require('joi');

const SOME_REQUIRED = 'Some required fields are missing';

const dataUserSchema = Joi.object({
  password: Joi.string().min(6).required().label('password'),
  email: Joi.string().email().required(),
  displayName: Joi.string().min(8).required().label('displayName'),  
 
}).messages({
  'string.base': 'Invalid fields',
  'any.required': SOME_REQUIRED,
  'string.empty': SOME_REQUIRED,
  
}).unknown();

const checkDataUser = (data) => {
    const { error } = dataUserSchema.validate(data);
    console.log('error schema', error);
      
    return error;
  };

 module.exports = { checkDataUser };