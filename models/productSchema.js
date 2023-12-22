const { Schema, model } = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         categories:
 *           type: string
 *         weight:
 *           type: string
 *         title:
 *           type: string
 *         calories:
 *           type: string
 *         groupBloodNotAllowed:
 *           type: array
 *       required:
 *         - categories
 *         - title
 */

const productSchema = Schema(
  {
    categories: {
      type: String,
    },
    weight: {
      type: String,
    },
    title: {
      type: String,
    },
    calories: {
      type: String,
    },
    groupBloodNotAllowed: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true },
);

const Product = model('Product', productSchema);

module.exports = {
  Product,
};
