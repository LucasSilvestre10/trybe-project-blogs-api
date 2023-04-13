const schema = require('./schema');

const checkDataCategory = (data) => {
  const { error } = schema.dataCategorySchema.validate(data);
  console.log('error', error);
  if (error) {
    return { code: 400, message: '"name" is required' };
  }
  return error;
};

module.exports = { checkDataCategory };
