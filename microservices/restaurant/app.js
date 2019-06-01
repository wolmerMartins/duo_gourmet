require('dotenv').config({
    path: './config/.env'
});

const app = require('./config/server');

require('./config/database');

const restauranteRoute = require('./repository/restaurantes');

app.use('/restaurantes', restauranteRoute);

app.listen(app.get('port'));