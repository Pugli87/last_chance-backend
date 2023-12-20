const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { v4: uuidv4 } = require('uuid');

const createUser = async Data => {
  try {
    const user = await User.findOne({
      email: Data.email,
    });
    if (user) {
      return;
    }

    Data.verificationToken = uuidv4();

    const salt = await bcrypt.genSalt(10);
    Data.password = await bcrypt.hash(Data.password, salt);

    const createUser = await User.create(Data);
    console.log('user', createUser);

    return createUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
