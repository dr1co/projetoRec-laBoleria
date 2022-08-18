import { insertFlavour } from '../repositories/flavoursRepository.js';

export async function addFlavour(req, res) {
    const flavour = res.locals.flavour

    try {
        const { rows: result } = await insertFlavour(flavour);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("On addFlavour: " + err);
    }
}