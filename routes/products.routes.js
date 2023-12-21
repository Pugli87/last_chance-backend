// routes/products.routes.js
const express = require('express');
const { products: controller } = require('../controllers');
const productsRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operations related to products
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response with a list of products
 */

productsRouter.get('/', controller.getProducts);

/**
 * @swagger
 * /products/{categories}:
 *   get:
 *     summary: Get products by categories
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categories
 *         required: true
 *         description: Categories of the products
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with products in the specified categories
 */

productsRouter.get('/:categories', controller.getCategories);

module.exports = productsRouter;
