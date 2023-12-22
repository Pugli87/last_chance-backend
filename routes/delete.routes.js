const express = require('express');
const { deleteProductFromDay } = require('../controllers/day/deleteProduct');

const deleteRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Delete
 *   description: Operations related to deleting products from a day
 */

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete a product from the daily food intake of a specific day
 *     tags: [Delete]
 *     parameters:
 *       - in: query
 *         name: dayId
 *         required: true
 *         description: ID of the day.
 *         schema:
 *           type: string
 *       - in: query
 *         name: eatenProductId
 *         required: true
 *         description: ID of the consumed product.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Day not found
 *       400:
 *         description: Bad request
 */

deleteRouter.delete('/', deleteProductFromDay);

module.exports = deleteRouter;
