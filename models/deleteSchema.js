const Joi = require('joi');

const deleteProductSchema = Joi.object({
  dayId: Joi.string().required(),
  eatenProductId: Joi.string().required(),
});

module.exports = deleteProductSchema;
