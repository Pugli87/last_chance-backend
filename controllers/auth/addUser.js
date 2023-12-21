const { auth: service } = require('../../service');
const validSchema = require('../../models/userJoiSchema');

const signUp = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { error } = validSchema.userJoiValidations(body);
    if (error !== undefined) {
      res
        .status(400)
        .send({ message: 'Joi or other validation library error' });
    } else {
      const result = await service.createUser(body);
      if (!result) {
        res.status(409).send({ message: 'Email in use' });
      } else {
        res.status(201).json(result);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      result: null,
      message: error,
    });
  }
};

module.exports = signUp;
