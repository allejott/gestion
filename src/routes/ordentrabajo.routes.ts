import { Router } from 'express';
import { getOrdenTrabajo } from '../controller/orden.controller';

const router = Router();

// Ruta para obtener una orden de trabajo por ID
router.get('/orden-trabajo/:id', getOrdenTrabajo);

export default router;
