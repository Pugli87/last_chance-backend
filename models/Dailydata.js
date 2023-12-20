const mongoose = require('mongoose');

const dailyDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dailyCalories: { type: Number, required: true },
  nonRecommendedFoods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }],
  date: { type: Date, default: Date.now },
});

const DailyData = mongoose.model('DailyData', dailyDataSchema);

module.exports = DailyData;
