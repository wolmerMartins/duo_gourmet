const bcrypt = require('bcrypt');
const User = require('../models/user');
const createToken = require('../../config/jwt');
const messages = require('../../utils/messages');

const UserController = {
    create: async (req, res) => {
        try {
            let user = await User.create(req.body);
            if (!user) return res.status(400).json({ error: messages.createUserError });

            user.password = undefined;

            return res.status(201).json(user);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    },
    auth: async (req, res) => {
        let { username, password } = req.body;

        try {
            let user = await User.findOne({ username }).select('+password');
            if (!user) return res.status(404).json({ error: messages.notFound.user });

            let passOk = await bcrypt.compare(password, user.password);
            if (!passOk) return res.status(401).json({ error: messages.unauth });

            return res.status(200).json({ id: user._id, token: createToken(user._id) });
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    }
}

module.exports = UserController;