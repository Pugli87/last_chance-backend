const express = require('express');
const { deleteProductFromDay } = require('../controllers/day/deleteProduct');

const deleteRouter = express.Router();

deleteRouter.delete('/', deleteProductFromDay);

module.exports = deleteRouter;
