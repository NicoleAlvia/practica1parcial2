import express from 'express';
import cors from 'cors';
import axios from 'axios';
import env from './config';
import espacio_parqueoRoutes from './routes/espacio_parqueo.routes';
import parqueoRoutes from './routes/parqueo.routes';
import vehiculoRoutes from './routes/vehiculo.routes';
import githubRoutes from './routes/github.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', espacio_parqueoRoutes);
app.use('/api', parqueoRoutes);
app.use('/api', vehiculoRoutes);
app.use('/api', githubRoutes);



export default app;
