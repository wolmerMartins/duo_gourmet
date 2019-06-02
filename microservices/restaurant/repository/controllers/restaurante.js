const Restaurantes = require('../models/restaurante');
const messages = require('../../utils/messages');

const RestauranteController = {
    create: async (req, res) => {
        try {
            let restaurante = await Restaurantes.create(req.body);
            if (!restaurante) return res.status(400).json({ error: messages.createRestaurantError });

            return res.status(201).json(restaurante);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    },
    getAllRestaurants: async (req, res) => {
        try {
            let restaurants = await Restaurantes.find({});
            if (!restaurants) return res.status(404).json({ error: messages.empty.restaurants });

            return res.status(200).json(restaurants);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    },
    getRestaurantById: async (req, res) => {
        try {
            let restaurant = await Restaurantes.findById(req.params.id);
            if (!restaurant) return res.status(404).json({ error: messages.notFound.restaurant });

            return res.status(200).json(restaurant);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    },
    utilizeRestaurant: async (req, res) => {
        try {
            let restaurant = await Restaurantes.findByIdAndUpdate(req.params.id, { $inc: { utilizacoes: -1 } }, { new: true });
            if (!restaurant) return res.status(400).json({ error: messages.useRestaurantError });

            return res.status(200).json(restaurant);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    }
};

module.exports = RestauranteController;