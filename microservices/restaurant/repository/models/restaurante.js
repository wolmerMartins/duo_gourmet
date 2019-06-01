const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestauranteSchema = new Schema({
    nome: { type: String, required: true },
    utilizacoes: { type: Number, required: true },
    capa: { type: String },
    logo: { type: String }
});

module.exports = mongoose.model('Restaurante', RestauranteSchema);