const express = require('express');
const usersRouter = express.Router();
const { auth: controller } = require('../controllers');

usersRouter.post('/signup', controller.add);
usersRouter.post('/login', controller.login);

module.exports = usersRouter;
