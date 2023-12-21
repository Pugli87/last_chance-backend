// routes/index.js
const express = require('express');
const productsRouter = require('./products.routes');
const authRouter = require('./auth.routes');
const dayRouter = require('./day.routes');
const deleteRouter = require('./delete.routes');
const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use('/products', productsRouter);
  indexRouter.use('/auth', authRouter);
  indexRouter.use('/day', dayRouter);
  indexRouter.use('/delete', deleteRouter);

  return indexRouter;
};
