// Modelo para la Fase 3: Demuestra estadísticas
const mongoose = require('mongoose');


//Modelo de las estadísticas de recursos.
const resourceStatSchema = new mongoose.Schema({
    resourceid : { type: Number, required: true },
    name : { type: String, required: true },
    style: { type: String, required: true },
    access_count : { type: Number, required: true },
    clicks : { type: Number },
    time_spent : { type: Number, required: true }
});

// Modelos de las estadisticas de pruebas sumativas.
const quizResultsSchema = new mongoose.Schema({
    id : { type: Number, required: true },
    score: { type: Number, required: true },
});

// Modelo de estadisticas generales.
const demuestraStatSchema = new mongoose.Schema({
    userid : { type: Number, required: true },
    courseid : { type: Number, required: true },
    moduleid : { type: Number, required: true },
    resources_stats : { type: [resourceStatSchema], required: true },
    quiz_results : { type: [quizResultsSchema], required: true }     
});

module.exports = mongoose.model('DemuestraStat', demuestraStatSchema);