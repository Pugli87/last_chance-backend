const express = require('express');
const { auth } = require('../middleware');
const { user: ctrl } = require('../controllers');

const userRouter = express.Router();

userRouter.get('/', auth, ctrl.getUser);

module.exports = userRouter;
