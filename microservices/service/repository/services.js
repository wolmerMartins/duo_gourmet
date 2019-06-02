const express = require('express');
const route = express.Router();
const auth = require('../middlewares/auth');
const verify = require('../middlewares/checkService');
const ServiceController = require('./controllers/service');

route.get('/historico', auth, ServiceController.getHistoric);

route.get('/historico/:userId', auth, ServiceController.getHistoricByUserId);

route.post('/utilizar', auth, verify.fields, ServiceController.utilize);

module.exports = route;