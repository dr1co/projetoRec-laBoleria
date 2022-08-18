import { findClientByPhone } from '../repositories/clientRepository.js';

export async function validateClient(req, res, next) {
    const { phone } = req.body;

    try {
        const { rows: checkClient } = await findClientByPhone(phone);

        if (checkClient.length > 0) {
            return res.status(409).send("On validateClient: cliente já cadastrado!");
        }

        res.locals.client = req.body;
        next();
    } catch (err) {
        res.status(500).send("On validateClient: " + err);
    }
}