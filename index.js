require('dotenv').config();
require('better-logging')(console);
const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const { Router } = require('express');
const router = Router();
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');

app.use(cors());

router.get('/api', (req, res) => {
    res.status(200).json('{text: "Hola mundo"}');
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/index', function(req, res) {
    res.render('index', { title: 'gente' });
});

router.get('/template', function(req, res) {
    res.render('template');
});

// Agregamos rutas al servidor
app.use('/', router);

// Encendemos el servidor
server.listen(process.env.PORT, () => {
    console.info(`Servidor corriendo en el puerto ${process.env.PORT}`);
});