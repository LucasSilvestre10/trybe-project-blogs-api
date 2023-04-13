const Joi = require('joi');

const dataLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
 
}).messages({
  'string.base': 'Invalid fields',
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const dataUserSchema = Joi.object({
  password: Joi.string().min(6).required().label('password'),
  email: Joi.string().email().required(),
  displayName: Joi.string().min(8).required().label('displayName'),  
 
}).messages({
  'string.base': 'Invalid fields',
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
  
}).unknown();

const dataCategorySchema = Joi.object({
  name: Joi.string().required(), 
});

module.exports = { dataLoginSchema, dataUserSchema, dataCategorySchema };