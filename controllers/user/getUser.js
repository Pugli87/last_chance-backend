//const { User } = require('../../models');

const getUser = async (req, res) => {
  console.log(req.user);
  const data = req.user;
  console.log('controller user');
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        data,
      },
    },
  });
};

module.exports = getUser;
