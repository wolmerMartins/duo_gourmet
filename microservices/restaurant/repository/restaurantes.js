const express = require('express');
const route = express.Router();
const RestauranteController = require('./controllers/restaurante');
const auth = require('../middlewares/auth');
const verify = require('../middlewares/checkRestaurante');

route.post('/', auth, verify.fields, RestauranteController.create);

route.get('/', auth, RestauranteController.getAll);

module.exports = route;