import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IReview extends Document {
    trainer: IUser['_id'];
    client: IUser['_id'];
    content: string;
    rating: number;
    date: Date;
    certified: boolean;
}

const ReviewSchema: Schema = new Schema({
    trainer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    date: { type: Date, default: Date.now },
    certified: { type: Boolean, default: false },
});

export default mongoose.model<IReview>('Review', ReviewSchema);