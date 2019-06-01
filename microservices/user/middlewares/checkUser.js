const User = require('../repository/models/user');
const Validate = require('../utils/Validate');
const messages = require('../utils/messages');

const checkUser = {
    fields: (req, res, next) => {
        let validation = new Validate(req.body);
        validation.isEmpty(['username', 'password']);

        if (validation.error.status == 'error') return res.status(400).json(validation.error);

        return next();
    },
    isUnique: async (req, res, next) => {
        try {
            let user = await User.findOne({ username: req.body.username });
            if (user) return res.status(400).json({ error: messages.duplicate.username });

            return next();
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    }
}

module.exports = checkUser;