require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const router = require('./routes');

// import middlewares
const { notFound, errorHandler } = require('./middleware');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3100; // Ajuste del puerto

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Healthdb',
      version: '1.0.0',
      description:
        'Esta es una aplicacion api rest realizada con express.  Esta controla la informacion personalizada de salud y una dieta balanceada',
    },
    servers: [
      {
        url: `http://127.0.0.1:${port}`,
        description: 'Local server ',
      },
      {
        url: `https://slim-mom.up.railway.app/api`,
        description: 'Health server ',
      },
    ],
  },
  apis: [
    path.join(__dirname, '/routes/*.js'),
    path.join(__dirname, '/models/*.js'),
  ],
};

const apiSpecification = swaggerJsdoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(apiSpecification));

app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use('/api', router());

// Middleware to verify the token and secure the necessary routes

app.use(notFound);

app.use(errorHandler);

module.exports = app;
