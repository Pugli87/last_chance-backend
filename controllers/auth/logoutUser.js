//const { auth: service } = require('../../service');
const service = require('../../service/auth/logoutUser');
const logout = async (req, res) => {
  console.log('controller');
  const { success, result, message } = await service.logout(req.user._id);

  if (!success) {
    return res.status(401).json({
      result,
      message,
    });
  }

  return res.status(204).end();
};
module.exports = logout;
