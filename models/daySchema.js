const { Schema, model } = require('mongoose');

const eatenProductSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
    min: 1,
    max: 3000,
  },
});

const daySchema = Schema(
  {
    date: {
      type: String,
      required: true,
    },
    eatenProducts: [eatenProductSchema],
  },
  { versionKey: false, timestamps: true },
);

const Day = model('Day', daySchema);

module.exports = {
  Day,
};
