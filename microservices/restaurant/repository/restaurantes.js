const express = require('express');
const route = express.Router();
const RestauranteController = require('./controllers/restaurante');
const auth = require('../middlewares/auth');
const verify = require('../middlewares/checkRestaurante');

route.get('/', auth, RestauranteController.getAllRestaurants);

route.get('/:id', auth, RestauranteController.getRestaurantById);

route.post('/:id', auth, RestauranteController.utilizeRestaurant);

route.post('/', auth, verify.fields, RestauranteController.create);

module.exports = route;