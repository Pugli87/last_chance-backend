const express = require('express');
//const { auth } = require('../middleware');
//const { joiSchema } = require('../../models');
//const { day: ctrl } = require('../controllers');

const daysRouter = express.Router();

daysRouter.post(
  '/',
  () => {
    console.log('post an eaten products');
  } /*auth, ctrl.getStatsPerDay*/,
);
daysRouter.post(
  '/info',
  () => {
    console.log('Get info for day');
  } /*auth, ctrl.addDay*/,
);
daysRouter.delete(
  '/',
  () => {
    console.log('Delete eaten produt');
  } /*auth, ctrl.removeDay*/,
);

module.exports = daysRouter;
