const schema = require('./schema');

const checkData = (data) => {
  const { error } = schema.dataLoginSchema.validate(data);
  console.log('error', error);
  
  return error;
};

const checkDataUser = (data) => {
  const { error } = schema.dataUserSchema.validate(data);
  console.log('error schema', error);
    
  return error;
};

module.exports = { checkData, checkDataUser };
