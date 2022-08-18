import { findCakeById } from '../repositories/cakeRepository.js';
import { findClientById } from '../repositories/clientRepository.js';

export async function validateOrder(req, res, next) {
    const order = req.body;

    try {
        const { rows: checkClient } = await findClientById(order.clientId);

        if (checkClient.length === 0) {
            return res.status(404).send("On validateOrder: cliente não encontrado!");
        }

        const { rows: checkCake } = await findCakeById(order.cakeId);

        if (checkCake.length === 0) {
            return res.status(404).send("On validateOrder: produto não encontrado!");
        }

        res.locals.order = order;
        next();
    } catch (err) {
        res.status(500).send("On validateOrder: " + err);
    }
}