const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 3,
      maxLength: 254,
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
      minLength: 8,
      maxLength: 100,
      require: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true },
);

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
