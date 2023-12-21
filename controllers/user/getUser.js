//const { User } = require('../../models');

const getUser = async (req, res) => {
  console.log(req.user);
  const { id, name, email } = req.user;
  console.log('controller user');
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        id,
        name,
        email,
        userData: {
          weight: 100,
          height: 170,
          age: 30,
          bloodType: 1,
          desiredWeight: 60,
          dailyRate: 2000,
          notAllowedProducts: ['Омлет'],
        },
      },
    },
  });
};

module.exports = getUser;
