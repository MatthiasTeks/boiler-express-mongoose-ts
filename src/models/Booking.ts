import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IService } from './Service';

export interface IBooking extends Document {
    trainer: IUser['_id'];
    client: IUser['_id'];
    service: IService['_id'];
    date: Date;
    time: string;
    confirmed: boolean;
}

const BookingSchema: Schema = new Schema({
    trainer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);