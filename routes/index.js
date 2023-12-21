// routes/index.js
const express = require('express');

const productsRouter = require('./products.routes');
const authRouter = require('./auth.routes');
const daysRouter = require('./days.routes');

const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use('/products', productsRouter);
  indexRouter.use('/auth', authRouter);
  indexRouter.use('/days', daysRouter);

  return indexRouter;
};
