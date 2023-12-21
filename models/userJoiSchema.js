/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *       required:
 *         - name
 *         - email
 *         - password
 */

const joi = require('joi');

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to user data
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */

const userJoiValidations = body => {
  const Schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return Schema.validate(body);
};

const loginJoiValidations = body => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return Schema.validate(body);
};

module.exports = {
  userJoiValidations,
  loginJoiValidations,
};
