const { calculateDailyCalories, getNonRecommendedFoods, saveDataToDatabase } = require('../services/caloriesService');

const privateEndpointHandler = async (req, res) => {
  try {
    const userId = req.user._id;
    const dailyCalories = await calculateDailyCalories(userId);
    const nonRecommendedFoods = await getNonRecommendedFoods(userId);

    // Guarda la información en la base de datos (sustituye esto con tu lógica de base de datos)
    await saveDataToDatabase(userId, dailyCalories, nonRecommendedFoods);

    res.status(200).json({ dailyCalories, nonRecommendedFoods });
  } catch (error) {
    console.error('Error in privateEndpointHandler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  privateEndpointHandler,
};
