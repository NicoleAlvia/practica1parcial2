import { Router } from 'express';
import { PrismaClient, Estado } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET all EspacioParqueo
router.get('/', async (req, res) => {
  const espacios = await prisma.espacios_parqueo.findMany();
  res.json(espacios);
});

// POST create a new EspacioParqueo
router.post('/', async (req, res) => {
  const { nombre, ubicacion } = req.body;
  const newEspacio = await prisma.espacio_parque.create({
    data: { nombre, ubicacion, estado: Estado.Activo }
  });
  res.json(newEspacio);
});

// PUT update an EspacioParqueo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, ubicacion, estado } = req.body;
  const updatedEspacio = await prisma.espacio_parqueo.update({
    where: { id: parseInt(id) },
    data: { nombre, ubicacion, estado }
  });
  res.json(updatedEspacio);
});

// DELETE an EspacioParque (Logical Deletion)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedEspacio = await prisma.espacio_parqueo.update({
    where: { id: parseInt(id) },
    data: { estado: Estado.Activo }
  });
  res.json(deletedEspacio);
});

export default router;

