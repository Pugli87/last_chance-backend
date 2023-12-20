const { User } = require('../../models');

const logout = async _id => {
  try {
    await User.findOneAndUpdate({ _id }, { token: null }, { new: true });
    return {
      success: true,
      result: {},
      message: 'Usuario deslogueado exitosamente.',
    };
  } catch (error) {
    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = {
  logout,
};
