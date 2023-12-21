// recommendedCaloriesController.js

const {
  getUserData,
  getNonRecommendedFoodList,
} = require('../../service/daily-rate/recommendedCaloriesService');

const calculateDailyIntake = (weight, height, age, desiredWeight) => {
  if (
    typeof weight !== 'number' ||
    typeof height !== 'number' ||
    typeof age !== 'number' ||
    typeof desiredWeight !== 'number'
  ) {
    throw new Error('Invalid input. All parameters must be numbers.');
  }
  return (
    10 * weight + 6.25 * height - 5 * age - 161 - 10 * (weight - desiredWeight)
  );
};

const getDailyRate = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await getUserData(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const dailyIntake = calculateDailyIntake(
      user.weight,
      user.height,
      user.age,
      user.desiredWeight,
    );
    res.json({ dailyIntake });
  } catch (error) {
    console.error('Error in getDailyRate:', error);
    next(error);
  }
};

const getNonRecommendedFoods = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await getUserData(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const unrecommendedFoods = await getNonRecommendedFoodList(
      user.desiredWeight,
    );
    res.json({ unrecommendedFoods });
  } catch (error) {
    console.error('Error in getNonRecommendedFoods:', error);
    next(error);
  }
};

module.exports = {
  getDailyRate,
  getNonRecommendedFoods,
};
