const { Product } = require('../../models');

const listCategories = async category => {
  try {
    const products = await Product.find({ categories: category });

    return products;
  } catch (error) {
    throw new Error('Error interno del servidor.');
  }
};

module.exports = listCategories;
