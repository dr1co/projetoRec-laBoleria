import { insertOrder } from '../repositories/ordersRepository.js';

export async function placeOrder(req, res) {
    const { order } = res.locals;

    try {
        await insertOrder(order);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("On placeOrder: " + err);
    }
}