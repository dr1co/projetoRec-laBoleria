import { findFlavourByName } from '../repositories/flavoursRepository.js';

export async function validateFlavour(req, res, next) {
    const flavour = req.body.name;

    try {
        const { rows: find } = await findFlavourByName(flavour);

        if (find.length > 0) {
            return res.status(409).send("On validateFlavour: sabor já existente!");
        }

        res.locals.flavour = flavour;
        next();
    } catch (err) {
        res.status(500).send("On validateFlavour " + err);
    }
}