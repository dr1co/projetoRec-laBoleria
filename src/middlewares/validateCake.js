import { findFlavourById } from '../repositories/flavoursRepository.js';
import { findCakeByName } from '../repositories/cakeRepository.js';
import isValidURL from './validateUrl.js';

export async function validateCake(req, res, next) {
    const cake = req.body;

    if (!isValidURL(cake.image)) {
        return res.status(422).send("On validateCake: url inválido para imagem!");
    }

    try {
        const { rows: checkFlavour } = await findFlavourById(cake.flavourId);

        if (checkFlavour.length === 0) {
            return res.status(404).send("On validateCake: sabor de bolo não encontrado!");
        }

        const { rows: checkCake } = await findCakeByName(cake.name);

        if (checkCake.length > 0) {
            return res.status(409).send("On validateCake: nome de bolo já existente!");
        }

        res.locals.cake = cake;
        next();
    } catch (err) {
        return res.status(500).send("On validateCake: " + err);
    }
}