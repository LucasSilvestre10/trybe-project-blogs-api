const Joi = require('joi');

const dataLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
 
}).messages({
  'string.base': 'Invalid fields',
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = { dataLoginSchema };