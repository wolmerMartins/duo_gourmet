const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    restauranteId: { type: String, required: true },
    usuarioId: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', ServiceSchema);