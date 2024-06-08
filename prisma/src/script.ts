import express from 'express';
import { PrismaClient } from '@prisma/client';
import vehiculosRouter from './routes/vehiculos';
import espaciosRouter from './routes/espacio_parqueo';
import parqueosRouter from './routes/parquear';
import externalService from './services/externalService';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use('/vehiculos', vehiculosRouter);
app.use('/espacios', espaciosRouter);
app.use('/parqueos', parqueosRouter);

app.get('/external-data', async (req, res) => {
  try {
    const data = await externalService.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
