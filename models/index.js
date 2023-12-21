// models/index.js
const { Product } = require('./productSchema');
const User = require('./userSchema');
const Register = require('./registerSchema');
const { UserJoi } = require('./userJoiSchema');
const { Day } = require('./daySchema');
const deleteProductSchema = require('./deleteSchema');

module.exports = {
  Product,
  User,
  UserJoi,
  Day,
  deleteProductSchema,
  Register,
};
