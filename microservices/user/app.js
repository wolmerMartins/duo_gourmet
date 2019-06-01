require('dotenv').config({
    path: './config/.env'
});

const app = require('./config/server');

require('./config/database');

const usersRoute = require('./repository/users');

app.use('/users', usersRoute);

app.listen(app.get('port'));