const Joi = require('joi');

const dataCategorySchema = Joi.object({
  name: Joi.string().required(), 
});

const checkDataCategory = (data) => {
  const { error } = dataCategorySchema.validate(data);
  console.log('error', error);
  if (error) {
    return { code: 400, message: '"name" is required' };
  }
  return error;
};

module.exports = { checkDataCategory };
