require('dotenv').config({
    path: './config/.env'
});

const app = require('./config/server');

require('./config/database');

const usersRoute = require('./repository/users');

app.use('/', usersRoute);

app.listen(app.get('port'));