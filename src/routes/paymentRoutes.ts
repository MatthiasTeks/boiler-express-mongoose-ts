import { Router } from 'express';
import { getPayment, createPayment, updatePayment, deletePayment } from '../controllers/paymentController';

const router = Router();

router.route('/:id')
    .get(getPayment)
    .put(updatePayment)
    .delete(deletePayment);

router.route('/')
    .post(createPayment);

export default router;