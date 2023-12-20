// controllers/index.js
const createUSer = require('./auth');
const loginUser = require('./auth');
const products = require('./products');
const days = require('./days');

module.exports = {
  createUSer,
  products,
  loginUser,
  days,
};
