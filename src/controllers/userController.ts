import User from '../models/User';
import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: 'User created' });
}

export const updateUser = async (req: Request, res: Response) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'User updated' });
}

export const deleteUser = async (req: Request, res: Response) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
}