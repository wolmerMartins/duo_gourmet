require('dotenv/config');

const mongoose = require('mongoose');
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true
};

mongoose.connect(process.env.DB_CONNECTION, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', err => {
    console.log('An error has occurred trying to connect database!', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('The database has been disconnected!');
});

mongoose.connection.on('connected', () => {
    console.log('The database has been connected successfully!');
});