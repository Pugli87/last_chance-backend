const { createUser } = require('./createUser');
const { login } = require('./loginUser');
const { logout } = require('./logoutUser');

module.exports = {
  createUser,
  login,
  logout,
};
