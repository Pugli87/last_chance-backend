// controllers/index.js
const products = require('./products');
const auth = require('./auth');
const logout = require('./auth');

module.exports = {
  products,
  auth,
  logout,
};
