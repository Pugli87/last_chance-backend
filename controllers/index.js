// controllers/index.js
const products = require('./products');
const auth = require('./auth');
const logout = require('./logout');
const dailyRate = require('./daily-rate'); 
module.exports = {
  products,
  auth,
  logout,
  dailyRate, 
};
