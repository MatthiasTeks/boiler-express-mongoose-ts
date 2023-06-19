import { Router } from 'express';
import { getReview, createReview, updateReview, deleteReview } from '../controllers/reviewController';

const router = Router();

router.route('/:id')
    .get(getReview)
    .put(updateReview)
    .delete(deleteReview);

router.route('/')
    .post(createReview);

export default router;