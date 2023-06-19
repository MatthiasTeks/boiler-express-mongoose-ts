import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    role: UserRole;
    name: string;
    bio?: string;
    location?: string;
    premium?: boolean;
    image?: string;
}

export enum UserRole {
    ADMIN = 'admin',
    EDUCATEUR = 'educateur',
    PROPRIETAIRE = 'proprietaire'
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    name: { type: String, required: true },
    bio: { type: String },
    location: { type: String },
    premium: { type: Boolean, default: false },
    image: { type: String },
});

export default mongoose.model<IUser>('User', UserSchema);