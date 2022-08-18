import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import flavoursRouter from './routes/flavoursRoutes.js';
import cakesRouter from './routes/cakesRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = express();

server.use(express.json());
server.use(cors());

server.use(flavoursRouter);
server.use(cakesRouter);

server.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
});