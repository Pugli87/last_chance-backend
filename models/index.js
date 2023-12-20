// models/index.js
const { Product } = require("./productSchema");
const User = require("./userSchema");
const { UserJoi } = require("./userJoiSchema");

module.exports = {
  Product,
  User,
  UserJoi,
};
