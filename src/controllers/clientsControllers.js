import { insertClient } from '../repositories/clientRepository.js';

export async function addClient(req, res) {
    const { client } = res.locals;

    try {
        await insertClient(client);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("On addClient: " + err);
    }
}