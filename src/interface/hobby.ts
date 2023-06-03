import { ObjectId } from 'mongodb';

export interface IHobby {
  _id?: ObjectId;
  passionLevel: string;
  hobbyName: string;
  year: number;
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