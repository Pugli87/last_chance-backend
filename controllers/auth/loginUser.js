const { loginUser: service } = require('../../service');
const validSchema = require('../../models/userJoiSchema');

const login = async (req, res) => {
  try {
    // console.log("entra");
    const body = req.body;
    const { error } = validSchema.loginJoiValidations(body);
    if (error !== undefined) {
      return res
        .status(400)
        .send({ message: 'Error de Joi u otra biblioteca de validación' });
    } else {
      const result = await service.login(body);
      if (!result) {
        return res
          .status(401)
          .send({ message: 'Usuario o contraseña son incorrectos' });
      } else {
        return res.status(200).send(result);
      }
    }
  } catch (error) {
    return res.status(500).json({
      result: null,
      message: error,
    });
  }
};

module.exports = login;
