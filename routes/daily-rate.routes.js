const express = require("express");
const router = express.Router();
const controllers = require("../controllers/calorias/recommendedCaloriescontroller");

// Middleware de autenticación
const auth = require('../middlewares');

// Ruta para obtener la ingesta diaria de calorías (ahora utilizando POST)
router.post("/daily-rate/:userId", auth, controllers.getDailyCaloricIntake);

// Ruta para obtener la lista de alimentos no recomendados (ahora utilizando POST)
router.post("/daily-rate", auth, controllers.getNonRecommendedFoods);

// Ruta para un endpoint privado
router.post('/private-endpoint', auth, controllers.privateEndpointHandler);

module.exports = router;
