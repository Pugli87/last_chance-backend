const { Schema, model } = require('mongoose');

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
