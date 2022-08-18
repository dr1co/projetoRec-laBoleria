import express from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import flavourSchema from '../schemas/flavourSchema.js';
import { validateFlavour } from '../middlewares/validateFlavour.js';
import { addFlavour } from '../controllers/flavoursControllers.js';

const flavoursRouter = express.Router();

flavoursRouter.post("/flavours", validateSchema(flavourSchema), validateFlavour, addFlavour);

export default flavoursRouter;