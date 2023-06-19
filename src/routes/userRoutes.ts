import { Router } from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/')
    .post(createUser);

export default router;