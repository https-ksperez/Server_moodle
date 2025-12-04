const express = require('express');
const router = express.Router();

const {
    registrarDemuestraStat 
} = require('../controllers/demuestrastat.controller');

// Ruta para registrar las estadísticas de los recursos (POST)
router.post('/', registrarDemuestraStat);

module.exports = router;