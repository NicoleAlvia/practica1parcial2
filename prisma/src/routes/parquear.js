import { Router } from 'express';
import { PrismaClient, Estado } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET all Parquear
router.get('/', async (req, res) => {
  const parqueos = await prisma.parquear.findMany();
  res.json(parqueos);
});

// POST create a new Parquear
router.post('/', async (req, res) => {
  const { vehiculoId, espacioParqueId, fechaInicio, fechaFin } = req.body;
  const newParquear = await prisma.parquear.create({
    data: { vehiculoId, espacioParqueId, fechaInicio, fechaFin, estado: Estado.Activo }
  });
  res.json(newParquear);
});

// PUT update a Parquear
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { vehiculoId, espacioParqueId, fechaInicio, fechaFin, estado } = req.body;
  const updatedParquear = await prisma.parquear.update({
    where: { id: parseInt(id) },
    data: { vehiculoId, espacioParqueId, fechaInicio, fechaFin, estado }
  });
  res.json(updatedParquear);
});

// DELETE a Parquear (Logical Deletion)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedParquear = await prisma.parquear.update({
    where: { id: parseInt(id) },
    data: { estado: Estado.Eliminado }
  });
  res.json(deletedParquear);
});

export default router;
