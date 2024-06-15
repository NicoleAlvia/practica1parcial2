import { Router } from 'express';
import { getEspacio_parqueo, createEspacio_parqueo, updateEspacio_parqueo, deleteEspacio_parqueo} from '../controllers/espacio_parqueo.controller';

const router = Router();

router.get('/espacio_parqueos', getEspacio_parqueo);
router.post('/espacio_parqueos', createEspacio_parqueo);
router.put('/espacio_parqueos/:id', updateEspacio_parqueo);
router.delete('/espacio_parqueos/:id', deleteEspacio_parqueo);

export default router;
