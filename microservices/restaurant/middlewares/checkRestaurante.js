const Validate = require('../utils/Validate');

const checkRestaurante = {
    fields: (req, res, next) => {
        let validation = new Validate(req.body);
        validation.isEmpty(['nome', 'utilizacoes']);

        if (validation.error.status == 'error') return res.status(400).json(validation.error);

        return next();
    }
}

module.exports = checkRestaurante;