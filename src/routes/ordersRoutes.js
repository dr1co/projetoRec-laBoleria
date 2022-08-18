import express from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import orderSchema from '../schemas/orderSchema.js';
import { validateOrder } from '../middlewares/validateOrder.js';
import { placeOrder, getOrders, getSingleOrder } from '../controllers/ordersControllers.js';

const ordersRouter = express.Router();

ordersRouter.post("/orders", validateSchema(orderSchema), validateOrder, placeOrder);
ordersRouter.get("/orders", getOrders);
ordersRouter.get("/orders/:id", getSingleOrder);

export default ordersRouter;