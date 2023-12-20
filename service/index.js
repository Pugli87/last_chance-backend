// controllers/index.js
const createUSer = require('./auth');
const loginUser = require('./auth');
const products = require('./products');

module.exports = {
  createUSer,
  products,
  loginUser,
};
