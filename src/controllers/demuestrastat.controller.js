// Importar modelos
const DemuestraStat = require('../models/DemuestraStat');
const {EstiloHistorico, EstiloHistoricoUpdate }= require('../models/EstiloHistorico');

// Controlador de demuestra estadísticas
const demuestraStatController = {};

// Método para registrar las estadísticas de los recursos.
demuestraStatController.registrarDemuestraStat = async (req, res
) => {
    try {
        console.log('Datos recibidos de las estadisticas de los recursos:',JSON.stringify(req.body, null,2));

        const { userid, courseid, moduleid, resources_stats, quiz_results } = req.body;

        // Crear un registro con las estadisticas de los recursos.
        const nuevasDemuestraStat = new DemuestraStat({
            userid,
            courseid,
            moduleid,
            resources_stats,
            quiz_results
        });

        // Guardar las estadísticas de los recursos.
        await nuevasDemuestraStat.save();

        // Simulación: Actualización ficticia de estilos de aprendizaje basada en las estadísticas recibidas
        const estilosActualizados = {
            userid: userid,
            courseid: courseid,
            feedback_message: "Basado en tus interacciones recientes, hemos actualizado tus estilos de aprendizaje.",
            updated_learning_styles: {
                visual: 0.5,
                auditory: 0.3,
                textual: 0.1,
                kinesthetic: 0.1
            }            
        };
        // Guardado en la BDD los estilos de aprendizaje actualizados en la colección EstiloHistoricoUpdate.
        const actualizarEstiloHistorico = new EstiloHistoricoUpdate(estilosActualizados);
        await actualizarEstiloHistorico.save();
        
        // Enviar respuesta a Moodle
        console.log('Respuesta enviada a Moodle Actualizacion:', JSON.stringify(estilosActualizados, null, 2));
        res.status(201).json(estilosActualizados);

    }catch (error) {
        console.error('Error al registrar las estadísticas de los recursos:', error);
        res.status(500).json({message: 'Error al registrar las estadísticas de los recursos'});
    }

};
module.exports = demuestraStatController;