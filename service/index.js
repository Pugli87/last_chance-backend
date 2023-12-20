// controllers/index.js
const createUSer = require('./users');
const loginUser = require('./users');
const products = require('./products');

module.exports = {
  createUSer,
  products,
  loginUser,
};
