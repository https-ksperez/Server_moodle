// Server_moodle/server.js
const express = require('express');
const app = express();
app.use(express.json());

const connectDB = require('./config/mongoose.config'); // Importar la configuración de conexión
const port = 3000;

//Importar rutas
const diagnosticoRoutes = require('./routes/diagnostico.routes');
const aprendeformativaRoutes = require('./routes/aprendeformativa.routes');
const demuestraStatRoutes = require('./routes/demuestrastat.routes');

//Funcion que incia el servidor
const startServer = async () => {
    try {
        // Conexion a la base de datos guiDB 
        await connectDB();
        console.log('Conexión a la base de datos guiaDB establecida con éxito.');
        // Rutas de diagnostico
        app.use('/diagnostico', diagnosticoRoutes);
        // Rutas de aprendeformativa
        app.use('/aprendeformativa', aprendeformativaRoutes);
        // Rutas de demuestraStat
        app.use('/demuestrastat', demuestraStatRoutes);
        //Levantar el servidor
        app.listen(port,'0.0.0.0', () => {

            console.log(`Servidor escuchando en http://localhost:${port}`);
        } );
    } catch (err) {
        console.error('Error al iniciar el servidor:', err);
    }
};

//Iniciar el servidor
startServer();



