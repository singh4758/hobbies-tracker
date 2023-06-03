import { ObjectId } from 'mongodb';
import { IHobby } from './IHobby';

export interface IUser {
  _id: ObjectId;
  name: string;
}

export interface IUserWithHobbies extends IUser {
  hobbies: IHobby[]
}

export interface IUserRepository {
  aggregation<T extends Document>(aggregationPipeline: any[]): Promise<T[]>;
  addUser(user: IUser): Promise<void>;
}