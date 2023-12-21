const express = require('express');
const { day: controller} = require("../controllers");
const dayRouter = express.Router();


dayRouter.post('/', controller.addProduct );
dayRouter.delete('/', controller.deleteProduct);
dayRouter.get('/info', controller.getUserInfoPerDay);


module.exports = dayRouter;

