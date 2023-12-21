const express = require('express');
const { addProductToDay } = require('../controllers/day/dayAddProduct');

const dayRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Day
 *   description: Operations related to daily food intake
 */

/**
 * @swagger
 * /day:
 *   post:
 *     summary: Add a product to the daily food intake
 *     tags: [Day]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 description: The date of the day
 *               eatenProducts:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: The ID of the product
 *                     title:
 *                       type: string
 *                       description: The title of the product
 *                     weight:
 *                       type: number
 *                       minimum: 1
 *                       maximum: 3000
 *                       description: The weight of the product in grams
 *     responses:
 *       200:
 *         description: Product added to the daily food intake successfully
 *       400:
 *         description: Bad request
 */

dayRouter.post('/', addProductToDay);

module.exports = dayRouter;
