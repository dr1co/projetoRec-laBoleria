import { insertOrder, findOrders, findOrderById } from '../repositories/ordersRepository.js';

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

        if (result.length === 0) {
            return res.status(404).send("On getOrders: nenhum pedido encontrado!");
        }

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
                totalPrice: order.totalPrice,
                isDelivered: order.isDelivered
            }
        }));
    } catch (err) {
        res.status(500).send("On getOrders: " + err);
    }
}

export async function getSingleOrder(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(404).send("On getSingleOrder: id não encontrado!");
    }

    try {
        const { rows: result } = await findOrderById(id);

        if (result.length === 0) {
            return res.status(404).send("On getSingleOrder: nenhum pedido encontrado!");
        }

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
                totalPrice: order.totalPrice,
                isDelivered: order.isDelivered
            }
        }));
    } catch (err) {
        res.status(500).send("On getSingleOrder: " + err);
    }
}