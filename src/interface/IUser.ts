import { ObjectId } from 'mongodb';
import { IHobby } from './IHobby';

export interface IUser {
  _id?: ObjectId;
  name: string;
}

export interface IUserWithHobbies extends IUser {
  hobbies: IHobby[]
}

export interface IUserRepository {
  aggregate<T>(aggregationPipeline: any[]): Promise<T[]>;
  addUser(user: IUser): Promise<void>;
}

export interface IUserService {
  getUsersWithHobbies(): Promise<IUserWithHobbies[]>;
  addUser(user: IUser): Promise<void>;
}