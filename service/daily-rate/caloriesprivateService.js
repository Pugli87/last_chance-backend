const DailyData = require('../models/DailyData');

const saveDataToDatabase = async (userId, dailyCalories, nonRecommendedFoods) => {
  try {
    // Crea un nuevo objeto DailyData y guárdalo en la base de datos
    const dailyData = new DailyData({
      userId,
      dailyCalories,
      nonRecommendedFoods,
    });

    await dailyData.save();
    console.log('Data saved to database:', dailyData);

    return dailyData;
  } catch (error) {
    console.error('Error in saveDataToDatabase:', error);
    throw error;
  }
};

module.exports = {
  saveDataToDatabase,
};
