const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../../models');

const login = async (data) => {
  try {
    //Valida si el usuario existe
    const isUser = await User.findOne({
      email: data.email,
    })
    if (!isUser) {
      return
    }

    //Valida si la contraseña es correcta
    const isPassword = await bcrypt.compare(data.password, isUser.password);
    if (!isPassword) {
      return
    }
    //Generar Token
    const token = jwt.sign(
      {
        _id: isUser._id,
        name: isUser.name,
        email: isUser.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      });
    //Guardar token en el usuario
    await User.findOneAndUpdate({ email: isUser.email }, { token })
    return {
      token,
      User: isUser,
    }
  } catch (error) {
    console.log("errp", error);

    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = {
  login,
};