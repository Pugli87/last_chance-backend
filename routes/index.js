// routes/index.js
const express = require('express');
const productsRouter = require('./products.routes');
const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use('/products', productsRouter);

  return indexRouter;
};
