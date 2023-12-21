// controllers/index.js
const products = require('./products');
const auth = require('./auth');
const user = require('./user');
//const days = require('./days');

const dailyRate = require('./daily-rate');
module.exports = {
  products,
  auth,
  user,
  //days,
  dailyRate,
};
