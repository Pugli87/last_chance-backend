const { object, array } = require('joi');
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 254,
      require: true,
    },
    email: {
      type: String,
      minlength: 3,
      maxlength: 254,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 100,
      require: true,
    },
    token: {
      type: String,
      default: null,
    },
    userData: {
      type: Object,
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('User', userSchema);

module.exports = User;
