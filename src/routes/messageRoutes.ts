import { Router } from 'express';
import { getMessage, createMessage, updateMessage, deleteMessage } from '../controllers/messageController';

const router = Router();

router.route('/:id')
    .get(getMessage)
    .put(updateMessage)
    .delete(deleteMessage);

router.route('/')
    .post(createMessage);

export default router;