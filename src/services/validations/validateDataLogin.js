const { dataLoginSchema } = require('./schema');

const checkData = (data) => {
  const { error } = dataLoginSchema.validate(data);
  console.log('error', error);
  if (error) {
    console.log('error.message', error.message);
  }
  
  return error;
};

const dataLoginValidation = (data) => {
  const error = checkData(data);
  if (!error) return;
  if (error.message === '"productId"') {
    return { error: 'PRODUCTID_IS_REQUIRED' };
  }
  if (error.message === '"quantity"') {
    return { error: 'QUANTITY_IS_REQUIRED' };
  }
  return { error: 'QUANTITY_INVALID' };
};

module.exports = { dataLoginValidation, checkData };
