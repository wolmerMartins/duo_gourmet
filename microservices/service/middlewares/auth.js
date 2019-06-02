require('dotenv').config({
    path: '../config/.env'
});

const jwt = require('jsonwebtoken');
const messages = require('../utils/messages');

const auth = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: messages.empty.token });
    if (token.indexOf('Bearer ') < 0) return res.status(401).json({ error: messages.invalid.token });

    jwt.verify(token.replace('Bearer ', ''), process.env.SECRET, (err, decode) => {
        if (err) return res.status(401).json({ error: messages.invalid.token });
        res.locals.user = decode;
        return next();
    });
};

module.exports = auth;