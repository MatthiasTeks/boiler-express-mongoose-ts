import Booking from '../models/Booking';
import { Request, Response } from 'express';

export const getBooking = async (req: Request, res: Response) => {
    const booking = await Booking.findById(req.params.id);
    res.json(booking);
}

export const createBooking = async (req: Request, res: Response) => {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json({ message: 'Booking created' });
}

export const updateBooking = async (req: Request, res: Response) => {
    await Booking.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Booking updated' });
}

export const deleteBooking = async (req: Request, res: Response) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
}
