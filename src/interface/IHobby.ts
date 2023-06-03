import { ObjectId } from 'mongodb';

enum passionLevel {
  low = 'Low',
  medium = 'Medium',
  high = 'High',
  veryHigh = 'Very-High'
}

export interface IHobby {
  _id: ObjectId;
  passionLevel: passionLevel;
  hobbyName: string;
  year: string;
  userId: string;
}