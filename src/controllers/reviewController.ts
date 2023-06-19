import Review from '../models/Review';
import { Request, Response } from 'express';

export const getReview = async (req: Request, res: Response) => {
    const review = await Review.findById(req.params.id);
    res.json(review);
}

export const createReview = async (req: Request, res: Response) => {
    const newReview = new Review(req.body);
    await newReview.save();
    res.json({ message: 'Review created' });
}

export const updateReview = async (req: Request, res: Response) => {
    await Review.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Review updated' });
}

export const deleteReview = async (req: Request, res: Response) => {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Review deleted' });
}