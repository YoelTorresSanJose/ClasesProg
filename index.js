require('dotenv').config();
require('better-logging')(console);
const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);

const path = require('path');

const routeApi = require('./router/routeApi');
const routeTemplate = require('./router/routeTemplate');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');

app.use(cors());

// Agregamos rutas al servidor
app.use('/api', routeApi);
app.use('/', routeTemplate);

// Encendemos el servidor
server.listen(process.env.PORT, () => {
    console.info(`Servidor corriendo en el puerto ${process.env.PORT}`);
});