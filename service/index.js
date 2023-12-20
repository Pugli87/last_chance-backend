// controllers/index.js
const createUSer = require('./auth');
const loginUser = require('./auth');
const products = require('./products');
const logout = require('./auth');

module.exports = {
  createUSer,
  products,
  loginUser,
  logout,
};
