const express = require('express');
const {
  deleteProductFromDay,
} = require('../controllers/deleteProduct/deleteProduct');

const deleteRouter = express.Router();

deleteRouter.delete('/', deleteProductFromDay);

module.exports = deleteRouter;
