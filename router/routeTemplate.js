const { Router } = require('express');
const router = Router();
const { renderView } = require('../helper/renderView');

const { getUsers } = require('./../model/Users');

let users = [];
getUsers().then(result => {
    users = result;
});

// Layout de renderizado base.
router.get('/', function(req, res) {
    renderView(res, 'template', { 'users': users });
});

router.get('/index', function(req, res) {
    res.render('index', { title: 'gente' });
});

router.get('/carrusel', function(req, res) {
    renderView(res, 'carrusel');
});

router.get('/template', function(req, res) {
    res.render('template', { 'users': users });
});

module.exports = router;