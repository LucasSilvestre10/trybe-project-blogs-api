const Joi = require('joi');

const SOME_REQUIRED = 'Some required fields are missing';

const dataBlogPostSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
   
  }).messages({
    'string.base': 'Invalid fields',
    'any.required': SOME_REQUIRED,
    'string.empty': SOME_REQUIRED,
    'array.base': 'one or more "categoryIds" not found',
  });

const checkDataBlogPost = (data) => {
  const { error } = dataBlogPostSchema.validate(data);
  console.log('error', error);
  if (error) {
    return { code: 400, message: error.message };
  }
  return error;
};

module.exports = { checkDataBlogPost };
