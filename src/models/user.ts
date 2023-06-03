import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../interface/user';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>('User', userSchema);