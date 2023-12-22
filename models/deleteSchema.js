/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteProductSchema:
 *       type: object
 *       properties:
 *         dayId:
 *           type: string
 *           description: ID del día.
 *         eatenProductId:
 *           type: string
 *           description: ID del producto consumido.
 *       required:
 *         - dayId
 *         - eatenProductId
 */
const Joi = require('joi');

const deleteProductSchema = Joi.object({
  dayId: Joi.string().required(),
  eatenProductId: Joi.string().required(),
});

module.exports = deleteProductSchema;
