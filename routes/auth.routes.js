const express = require('express');

const usersRouter = express.Router();
const { auth: controller } = require('../controllers');
const { auth } = require('../middleware');

module.exports = () => {
  /**
   * @swagger
   * tags:
   *   name: Auth
   *   description: Authentication endpoints
   */
  /**
   * @swagger
   * api/auth/signup/:
   *   post:
   *     summary: Create a new user
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: User created successfully
   *       400:
   *         description: Bad request
   */
  /**
   * @swagger
   * api/auth/login:
   *   post:
   *     summary: User login
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: User logged in successfully
   *       401:
   *         description: Unauthorized
   *       400:
   *         description: Bad request
   */
  /**
   * @swagger
   * api/auth/logout:
   *   post:
   *     summary: User logout
   *     tags: [Auth]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: User logged out successfully
   *       401:
   *         description: Unauthorized
   */
};
usersRouter.post('/signup', controller.add);
usersRouter.post('/login', controller.login);
usersRouter.post('/logout', auth, controller.logout);

module.exports = usersRouter;
