import express from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import orderSchema from '../schemas/orderSchema.js';
import { validateOrder } from '../middlewares/validateOrder.js';
import { placeOrder, getOrders, getSingleOrder, deliverOrder } from '../controllers/ordersControllers.js';

const ordersRouter = express.Router();

ordersRouter.post("/order", validateSchema(orderSchema), validateOrder, placeOrder);
ordersRouter.get("/orders", getOrders);
ordersRouter.get("/orders/:id", getSingleOrder);
ordersRouter.patch("/order/:id", deliverOrder);

export default ordersRouter;