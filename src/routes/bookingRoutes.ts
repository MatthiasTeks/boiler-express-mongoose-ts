import { Router } from 'express';
import { getBooking, createBooking, updateBooking, deleteBooking } from '../controllers/bookingController';

const router = Router();

router.route('/:id')
    .get(getBooking)
    .put(updateBooking)
    .delete(deleteBooking);

router.route('/')
    .post(createBooking);

export default router