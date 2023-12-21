const express = require('express');

const usersRouter = express.Router();
const { auth: controller } = require('../controllers');
const { auth } = require('../middleware');

usersRouter.post('/signup', controller.add);
usersRouter.post('/login', controller.login);
usersRouter.post('/logout', auth, controller.logout);

module.exports = usersRouter;
