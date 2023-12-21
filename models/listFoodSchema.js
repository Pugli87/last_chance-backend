const mongoose = require("mongoose");

const dailyRateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  finalWeightAmount: { type: Number, required: true },
  fatContent: { type: Number },
  sugarContent: { type: Number },
  sodiumContent: { type: Number },
});

const DailyRate = mongoose.model("DailyRate", dailyRateSchema); 

module.exports = DailyRate; 
