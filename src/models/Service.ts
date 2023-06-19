import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IService extends Document {
    trainer: IUser['_id'];
    name: string;
    description: string;
    price: number;
    duration: number;
}

const ServiceSchema: Schema = new Schema({
    trainer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
});

export default mongoose.model<IService>('Service', ServiceSchema);