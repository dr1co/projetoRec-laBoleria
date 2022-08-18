import { insertCake } from '../repositories/cakeRepository.js';

export async function addCake(req, res) {
    const { cake } = res.locals;

    try {
        await insertCake(cake);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("On addCake: " + err);
    }
}