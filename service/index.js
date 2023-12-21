// controllers/index.js
const auth = require('./auth');
const products = require('./products');
const logout = require('./auth');

module.exports = {
  auth,
  products,
  loginUser,
  logout,
};
