const { products: service } = require('../../service');

const getProducts = async (req, res, next) => {
  try {
    const products = await service.listProducts();

    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
