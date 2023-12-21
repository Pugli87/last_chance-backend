// models/index.js
const { Product } = require('./productSchema');
const User = require('./userSchema');
const { UserJoi } = require('./userJoiSchema');
const { Day } = require('./daySchema');
const deleteProductSchema = require('./deleteSchema');
const {Days} = require("./days");

module.exports = {
  Product,
  User,
  UserJoi,
  Day,
  deleteProductSchema,
  Days,
};
