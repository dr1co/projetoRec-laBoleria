import { insertClient, findClientOrders } from '../repositories/clientRepository.js';

export async function addClient(req, res) {
    const { client } = res.locals;

    try {
        await insertClient(client);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("On addClient: " + err);
    }
}

export async function getClientOrders(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(404).send("On getClientOrders: id não encontrada!");
    }

    try {
        const { rows: result } = await findClientOrders(id);
        
        if (result.length === 0) {
            return res.status(404).send("On getClientOrders: nenhum pedido foi encontrado!");
        }

        res.status(200).send(result);
    } catch (err) {
        res.status(500).send("On getClientOrders: " + err);
    }
}