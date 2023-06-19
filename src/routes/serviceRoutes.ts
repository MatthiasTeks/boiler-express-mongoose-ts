import { Router } from 'express';
import { getService, createService, updateService, deleteService } from '../controllers/serviceController';

const router = Router();

router.route('/:id')
    .get(getService)
    .put(updateService)
    .delete(deleteService);

router.route('/')
    .post(createService);

export default router;