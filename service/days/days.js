const express = require('express');
const router = express.Router();

const { errorHandlerMiddleware, auth } = require('../../middlewares'); // Importa errorHandlerMiddleware en lugar de ctrlWrapper
const { days: ctrl } = require('../../controllers');
const { joiSchema } = require('../../models');
const notFoundMiddleware = require('../../middlewares/notFoundMiddleware'); // Importa notFoundMiddleware en lugar de schemaValidation

// Define una ruta GET que utiliza dos middlewares: 'auth' y el controlador 'getStatsPerDay'
router.get('/:day', auth, ctrl.getStatsPerDay);

// Define una ruta POST que utiliza tres middlewares: 'auth', 'notFoundMiddleware', y el controlador 'addDay'
router.post('/', auth, notFoundMiddleware(joiSchema.dayAdd), ctrl.addDay);

// Define una ruta DELETE que utiliza dos middlewares: 'auth' y el controlador 'removeDay'
router.delete('/:diaryId', auth, ctrl.removeDay);

// Middleware para manejar errores 404 (Not Found)
router.use(notFoundMiddleware);

// Middleware para manejar errores generales
router.use(errorHandlerMiddleware);

module.exports = router;
