require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT);

module.exports = app;