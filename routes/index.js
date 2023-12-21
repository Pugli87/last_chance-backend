// routes/index.js
const express = require('express');

const dailyRateRoutes = require('./daily-rate.routes');
const productsRouter = require('./products.routes');
const authRouter = require('./auth.routes');
const dayRouter = require('./days.routes');

const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use('/daily-rate', dailyRateRoutes);
  indexRouter.use('/products', productsRouter);
  indexRouter.use('/auth', authRouter);
  indexRouter.use('/day', dayRouter);

  return indexRouter;
};
