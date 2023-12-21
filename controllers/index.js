// controllers/index.js
const products = require('./products');
const auth = require('./auth');
const dailyRate = require('./daily-rate');
module.exports = {
  products,
  auth,
  dailyRate,
};
