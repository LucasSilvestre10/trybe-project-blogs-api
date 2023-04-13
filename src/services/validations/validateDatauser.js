const schema = require('./schema');

const checkDataUser = (data) => {
    const { error } = schema.dataUserSchema.validate(data);
    console.log('error schema', error);
      
    return error;
  };

 module.exports = { checkDataUser };