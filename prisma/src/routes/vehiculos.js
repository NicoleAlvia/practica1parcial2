import { Router } from 'express';
import { PrismaClient, Estado } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET all Vehiculos
router.get('/', async (req, res) => {
  const vehiculos = await prisma.vehiculo.findMany();
  res.json(vehiculos);
});

// POST create a new Vehiculo
router.post('/', async (req, res) => {
  const { placa, modelo } = req.body;
  const newVehiculo = await prisma.vehiculo.create({
    data: { placa, modelo, estado: Estado.Activo }
  });
  res.json(newVehiculo);
});

// PUT update a Vehiculo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { placa, modelo, estado } = req.body;
  const updatedVehiculo = await prisma.vehiculo.update({
    where: { id: parseInt(id) },
    data: { placa, modelo, estado }
  });
  res.json(updatedVehiculo);
});

// DELETE a Vehiculo (Logical Deletion)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedVehiculo = await prisma.vehiculo.update({
    where: { id: parseInt(id) },
    data: { estado: Estado.Activo }
  });
  res.json(deletedVehiculo);
});

export default router;
