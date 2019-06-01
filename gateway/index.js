require('dotenv').config({
    path: './config/.env'
});

const http = require('http');
const proxy = require('express-http-proxy');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');

const userProxy = proxy(process.env.USER_URL);
const restaurantProxy = proxy(process.env.RESTAURANT_URL);
const serviceProxy = proxy(process.env.SERVICE_URL);

app.post('/users/create', userProxy);
app.post('/users/auth', userProxy);

app.get('/restaurantes', restaurantProxy);
app.post('/restaurantes', restaurantProxy);

app.get('/historico', serviceProxy);
app.get('/historico/:userId', serviceProxy);
app.post('/utilizar', serviceProxy);

app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(process.env.GATEWAY_PORT, () => {
    console.log('Gateway listening at port ' + process.env.GATEWAY_PORT);
});