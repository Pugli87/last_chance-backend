const express = require('express');
const { addProductToDay } = require('../controllers/day/dayAddProduct');

const dayRouter = express.Router();

dayRouter.post('/', addProductToDay);

module.exports = dayRouter;
