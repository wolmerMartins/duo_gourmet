require('dotenv/config');

const jwt = require('jsonwebtoken');

const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN });
}

module.exports = createToken;