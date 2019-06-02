const Validate = require('../utils/Validate');
const messages = require('../utils/messages');

const checkService = {
    fields: (req, res, next) => {
        let validation = new Validate(req.body);
        validation.isEmpty(['restauranteId', 'usuarioId']);

        if (validation.error.status == 'error') return res.status(400).json(validation.error);

        return next();
    }
}

module.exports = checkService;