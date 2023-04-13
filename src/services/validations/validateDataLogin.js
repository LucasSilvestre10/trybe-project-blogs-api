const schema = require('./schema');

const checkData = (data) => {
  const { error } = schema.dataLoginSchema.validate(data);
  console.log('error', error);
  
  return error;
};

module.exports = { checkData };
