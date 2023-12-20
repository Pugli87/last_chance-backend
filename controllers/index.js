// controllers/index.js
const products = require('./products');
const auth = require('./auth');
const days = require('./days');
const logout = require('./auth');

module.exports = {
  products,
  auth,
  days,
  logout,
};
