const mongoose = require("mongoose");

const dailyProfileSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    age: { type: Number, required: true },
    desiredWeight: { type: Number, required: true },
});

const DailyProfile = mongoose.model("DailyProfile", dailyProfileSchema);

module.exports = DailyProfile;
