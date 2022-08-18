import express from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import clientSchema from '../schemas/clientSchema.js';
import { validateClient } from '../middlewares/validateClient.js';
import { addClient } from '../controllers/clientsControllers.js';

const clientsRouter = express.Router();

clientsRouter.post("/clients", validateSchema(clientSchema), validateClient, addClient);

export default clientsRouter;