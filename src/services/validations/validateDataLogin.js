const Joi = require('joi');

const SOME_REQUIRED = 'Some required fields are missing';

const dataLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
 
}).messages({
  'string.base': 'Invalid fields',
  'any.required': SOME_REQUIRED,
  'string.empty': SOME_REQUIRED,
});

const checkData = (data) => {
  const { error } = dataLoginSchema.validate(data);
  console.log('error', error);
  
  return error;
};

module.exports = { checkData };
