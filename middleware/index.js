// middelware/index.js
const errorHandler = require('./errorHandler');
const notFound = require('./notFound');

module.exports = {
  errorHandler,
  notFound,
};
