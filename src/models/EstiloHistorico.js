// Modelo Diagnostico.js utilizado para la Fase 1: Aprende - Retorno
const mongoose = require('mongoose');

// Modelo de preguntas de diagnóstico.
const estilosHistoricoSchema = new mongoose.Schema({
    userid: { type: Number, required: true },
    courseid: { type: Number, required: true },
    learning_styles : {
        visual: { type: Number, required: true },
        auditory: { type: Number, required: true },
        textual: { type: Number, required: true },
        kinesthetic: { type: Number, required: true }
    },
    feedback_message : { type: String, required: true },
    
});

const estilosHistoricoUpdateSchema = new mongoose.Schema({
    userid: { type: Number, required: true },
    courseid: { type: Number, required: true },
    feedback_message : { type: String, required: true },
    updated_learning_styles : {
        visual: { type: Number, required: true },
        auditory: { type: Number, required: true },
        textual: { type: Number, required: true },
        kinesthetic: { type: Number, required: true }
    }
});

const EstiloHistorico = mongoose.model('EstiloHistorico', estilosHistoricoSchema);
const EstiloHistoricoUpdate = mongoose.model('EstiloHistoricoUpdate', estilosHistoricoUpdateSchema);
module.exports = {EstiloHistorico, EstiloHistoricoUpdate};

