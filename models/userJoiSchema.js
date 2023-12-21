const joi = require('joi');

const registerJoiValidations = body => {
  const Schema = joi.object({
    name: joi.string().required().min(3).max(20),
    email: joi.string().email().required(),
    password: joi.string().required().min(8).messages({
      'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
    }),
  });
  return Schema.validate(body);
};

const loginJoiValidations = body => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return Schema.validate(body);
};

module.exports = {
  registerJoiValidations,
  loginJoiValidations,
};
