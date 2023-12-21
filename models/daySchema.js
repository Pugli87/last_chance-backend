/**
 * @swagger
 * components:
 *   schemas:
 *     EatenProduct:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *         title:
 *           type: string
 *         weight:
 *           type: number
 *           minimum: 1
 *           maximum: 3000
 *       required:
 *         - productId
 *         - title
 *         - weight
 *
 *     Day:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *         eatenProducts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/EatenProduct'
 *       required:
 *         - date
 *         - eatenProducts
 */
const { Schema, model } = require('mongoose');

const eatenProductSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
    min: 1,
    max: 3000,
  },
});

const daySchema = Schema(
  {
    date: {
      type: String,
      required: true,
    },
    eatenProducts: [eatenProductSchema],
  },
  { versionKey: false, timestamps: true },
);

const Day = model('Day', daySchema);

module.exports = {
  Day,
};
