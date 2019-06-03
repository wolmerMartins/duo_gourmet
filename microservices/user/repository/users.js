const express = require('express');
const route = express.Router();
const UserController = require('./controllers/user');
const verify = require('../middlewares/checkUser');

route.post('/users/create', verify.fields, verify.isUnique, UserController.create);

route.post('/autenticar', verify.fields, UserController.auth);

module.exports = route;