// routes/products.routes.js
const express = require('express');
//const { products: controller } = require('../controllers');
const productsRouter = express.Router();

productsRouter.get(
  '/',
  /*controller.getProducts*/ () => {
    console.log('products');
  },
);

module.exports = productsRouter;
