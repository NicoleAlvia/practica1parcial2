import { Router } from 'express';
import { getParqueo, createParqueo, updateParqueo, deleteParqueo } from '../controllers/parqueo.controller';

const router = Router();

router.get('/parqueo', getParqueo);
router.post('/parqueo', createParqueo);
router.put('/parqueo/:id', updateParqueo);
router.delete('/parqueo/:id', deleteParqueo);

export default router;
