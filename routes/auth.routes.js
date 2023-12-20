const express = require("express");
const usersRouter = express.Router();
const { login: controller } = require('../controllers');

usersRouter.post("/login", controller.login);

module.exports = usersRouter;
