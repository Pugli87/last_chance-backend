// routes/products.routes.js
const express = require('express');
const { products: controller } = require('../controllers');
const productsRouter = express.Router();

productsRouter.get('/', controller.getProducts);
productsRouter.get('/:categories', controller.getCategories);

module.exports = productsRouter;
