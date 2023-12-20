// routes/index.js
const express = require('express');
const productsRouter = require('./products.routes');
const authRouter = require('./auth.routes')
const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use('/products', productsRouter);
  indexRouter.use('/auth', authRouter);

  return indexRouter;
};
