import { Router } from 'express';
import { getVehiculo, createVehiculo, updateVehiculo, deleteVehiculo} from '../controllers/vehiculo.controller';

const router = Router();

router.get('/vehiculos', getVehiculo);
router.post('/vehiculos', createVehiculo);
router.put('/vehiculos/:id', updateVehiculo);
router.delete('/vehiculos/:id', deleteVehiculo);

export default router;
