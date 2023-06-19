import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IBooking } from './Booking';

export interface IPayment extends Document {
    user: IUser['_id'];
    booking: IBooking['_id'];
    amount: number;
    date: Date;
}

const PaymentSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

export default mongoose.model<IPayment>('Payment', PaymentSchema);