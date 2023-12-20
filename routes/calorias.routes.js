const express = require("express");
const router = express.Router();
const controllers = require("../controllers/calorias/recommendedCaloriescontroller");

// Ruta para obtener la ingesta diaria de calorías (ahora utilizando POST)
router.post("/daily-rate/:userId", controllers.getDailyCaloricIntake);

// Ruta para obtener la lista de alimentos no recomendados (ahora utilizando POST)
router.post("/listNotFood", controllers.getNonRecommendedFoods);

module.exports = router;
