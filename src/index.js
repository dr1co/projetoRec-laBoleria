import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import flavoursRouter from './routes/flavoursRoutes.js';
import cakesRouter from './routes/cakesRoutes.js';
import clientsRouter from './routes/clientsRoutes.js';
import ordersRouter from './routes/ordersRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = express();

server.use(express.json());
server.use(cors());

server.use(flavoursRouter);
server.use(cakesRouter);
server.use(clientsRouter);
server.use(ordersRouter);

server.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
});