const request = require('request');
const Service = require('../models/service');
const messages = require('../../utils/messages');

function verifyTimeLastUse(data) {
    let useDate = data[0].dataCriacao;
    let time = useDate.getTime() + (5 * 60000);
    let currentDate = new Date();

    
    return new Promise((resolve, reject) => {
        resolve({ error: time > currentDate.getTime(), message: messages.waitTime });
    });
}

function useRestaurant(req) {
    let { restauranteId } = req.body;
    let token = req.headers.authorization;

    return new Promise((resolve, reject) => {
        request.post(`http://localhost:3000/restaurantes/${restauranteId}`, {headers: {'authorization': token}}, (err, response, data) => {
            if (err) reject(err);

            resolve(JSON.parse(data));
        });
    });
}

function verifyRestaurant(req) {
    let { restauranteId } = req.body;
    let token = req.headers.authorization;
    
    return new Promise((resolve, reject) => {
        request.get(`http://localhost:3000/restaurantes/${restauranteId}`, {headers: {'authorization': token}}, (err, response, data) => {
            if (err) reject(err);
            
            let restaurant = JSON.parse(data);
            if (restaurant.error) resolve({ error: true, message: restaurant.error });
            if (restaurant.utilizacoes == 0) resolve({ error: true, message: messages.invalid.utilizations });
            
            resolve({ error: false });
        });
    });
}

const ServiceController = {
    utilize: async (req, res) => {
        let { usuarioId } = req.body;

        try {
            let utilizations = await verifyRestaurant(req);
            if (JSON.parse(utilizations.error)) return res.status(400).json(utilizations);

            let lastUse = await Service.find({ usuarioId }).sort({ _id: -1 }).limit(1);
            if (lastUse.length > 0) {
                let time = await verifyTimeLastUse(lastUse);
                if (time.error) return res.status(400).json(time);
            }

            let use = await useRestaurant(req);
            if (!use) return res.status(400).json(use);

            let utilize = await Service.create(req.body);
            if (!utilize) return res.status(400).json({ error: messages.useRestaurantError });

            return res.status(200).json(utilize);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError, message: err });
        }
    },
    getHistoric: async (req, res) => {
        try {
            let historics = await Service.find({});
            if (!historics) return res.status(404).json({ error: messages.notFound.historics });

            return res.status(200).json(historics);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    },
    getHistoricByUserId: async (req, res) => {
        try {
            let historic = await Service.findOne({ usuarioId: req.params.userId });
            if (!historic) return res.status(404).json({ error: messages.notFound.historic });

            return res.status(200).json(historic);
        } catch(err) {
            return res.status(500).json({ error: messages.serverError });
        }
    }
};

module.exports = ServiceController;