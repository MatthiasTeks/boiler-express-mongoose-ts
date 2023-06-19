import Payment from '../models/Payment';
import { Request, Response } from 'express';

export const getPayment = async (req: Request, res: Response) => {
    const payment = await Payment.findById(req.params.id);
    res.json(payment);
}

export const createPayment = async (req: Request, res: Response) => {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.json({ message: 'Payment created' });
}

export const updatePayment = async (req: Request, res: Response) => {
    await Payment.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Payment updated' });
}

export const deletePayment = async (req: Request, res: Response) => {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Payment deleted' });
}
