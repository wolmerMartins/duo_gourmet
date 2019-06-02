require('dotenv').config({
    path: './config/.env'
});

const app = require('./config/server');

require('./config/database');

const serviceRoute = require('./repository/services');

app.use('/', serviceRoute);

app.listen(app.get('port'));