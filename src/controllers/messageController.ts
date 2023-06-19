import Message from '../models/Message';
import { Request, Response } from 'express';

export const getMessage = async (req: Request, res: Response) => {
    const message = await Message.findById(req.params.id);
    res.json(message);
}

export const createMessage = async (req: Request, res: Response) => {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ message: 'Message created' });
}

export const updateMessage = async (req: Request, res: Response) => {
    await Message.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Message updated' });
}

export const deleteMessage = async (req: Request, res: Response) => {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: 'Message deleted' });
}