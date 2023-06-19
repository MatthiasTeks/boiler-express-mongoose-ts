import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IMessage extends Document {
    sender: IUser['_id'];
    recipient: IUser['_id'];
    content: string;
    date: Date;
}

const MessageSchema: Schema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default mongoose.model<IMessage>('Message', MessageSchema);