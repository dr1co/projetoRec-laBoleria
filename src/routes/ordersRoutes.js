import express from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import orderSchema from '../schemas/orderSchema.js';
import { validateOrder } from '../middlewares/validateOrder.js';
import { placeOrder } from '../controllers/ordersControllers.js';

const ordersRouter = express.Router();

ordersRouter.post("/orders", validateSchema(orderSchema), validateOrder, placeOrder);

export default ordersRouter;