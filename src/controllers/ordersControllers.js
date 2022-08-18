import { insertOrder, findOrders } from '../repositories/ordersRepository.js';

export async function placeOrder(req, res) {
    const { order } = res.locals;

    try {
        await insertOrder(order);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("On placeOrder: " + err);
    }
}

export async function getOrders(req, res) {
    const date = req.query.date;

    try {
        const { rows: result } = await findOrders(date);

        res.status(200).send(result.map((order) => {
            return {
                client: {
                    id: order.clientId,
                    name: order.clientName,
                    address: order.address,
                    phone: order.phone
                },
                cake: {
                    id: order.cakeId,
                    name: order.cakeName,
                    price: order.price,
                    description: order.description,
                    flavour: order.flavour,
                    image: order.image
                },
                orderId: order.orderId,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice
            }
        }));
    } catch (err) {
        res.status(500).send("On getOrders: " + err);
    }
}