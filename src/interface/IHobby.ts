import { ObjectId } from 'mongodb';

enum passionLevel {
  low = 'Low',
  medium = 'Medium',
  high = 'High',
  veryHigh = 'Very-High'
}

export interface IHobby {
  _id?: ObjectId;
  passionLevel: passionLevel;
  hobbyName: string;
  year: string;
  userId: ObjectId;
}

export interface IHobbyRepository {
  addHobby(hobby: IHobby): Promise<void>;
  removeHobby(id: ObjectId): Promise<void> ;
  findHobby(id: ObjectId): Promise<IHobby | null>
}

export interface IHobbyService {
  addHobby(hobby: IHobby): Promise<void>;
  removeHobby(id: ObjectId): Promise<void> 
}