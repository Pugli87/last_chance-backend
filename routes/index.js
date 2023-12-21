// routes/index.js
const express = require('express');
const caloriasRouter = require("./calorias.routes");
const productsRouter = require('../service/auth/products.routes');
const authRouter = require('./auth.routes')
const caloriesPrivateRouter = require("./calories.routes"); 
const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use("/calorias", caloriasRouter);
  indexRouter.use('/products', productsRouter);
  indexRouter.use('/auth', authRouter);
  indexRouter.use("/calories", caloriesPrivateRouter); 
  

  return indexRouter;
};
