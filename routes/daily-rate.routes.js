const express = require('express');
const router = express.Router();
const {
  getDailyRate,
  getNonRecommendedFoods,
} = require('../controllers/daily-rate/recommendedCaloriescontroller');

const {
  privateEndpointHandler,
} = require('../controllers/daily-rate/DailyRatePriv');

// Middleware de autenticación
const { auth } = require('../middleware');

// Ruta para obtener la ingesta diaria de calorías (ahora utilizando POST)
router.post('/:userId', auth, getDailyRate);

// Ruta para obtener la lista de alimentos no recomendados (ahora utilizando POST)
router.post('/', auth, getNonRecommendedFoods);

// Ruta para un endpoint privado
router.post('/private-endpoint', auth, privateEndpointHandler);

module.exports = router;
