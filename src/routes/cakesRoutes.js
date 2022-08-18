import express from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import cakeSchema from '../schemas/cakeSchema.js';
import { validateCake } from '../middlewares/validateCake.js';
import { addCake } from '../controllers/cakesControllers.js';

const cakesRouter = express.Router();

cakesRouter.post("/cakes", validateSchema(cakeSchema), validateCake, addCake)

export default cakesRouter;