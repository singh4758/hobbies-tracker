import mongoose, { Schema } from 'mongoose';
import { IHobby } from '../interface/hobby';
import { ObjectId } from 'mongodb';

const hobbySchema = new Schema<IHobby>({
  hobbyName: { type: String, required: true },
  passionLevel: {type: String, required: true },
  year: {type: Number, required: true },
  userId: {type: ObjectId, required: true}
});

export const HobbyModel = mongoose.model<IHobby>('Hobbies', hobbySchema);