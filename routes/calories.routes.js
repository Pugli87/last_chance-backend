const express = require('express');
const router = express.Router();
const { calories: controller } = require('../controllers');
const authMiddleware = require('../middlewares/authMiddleware');

// Punto final privado para obtener la ingesta diaria de calorías y la lista de alimentos no recomendados
router.post('/private-endpoint', authMiddleware, controller.privateEndpointHandler);

module.exports = router;
