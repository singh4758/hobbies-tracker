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
  findUser(id: ObjectId): Promise<IUser | null>;
}

export interface IUserService {
  getUsersWithHobbies(skip: number, limit: number): Promise<IUserWithHobbies[]>;
  addUser(user: IUser): Promise<void>;
  findUser(id: ObjectId): Promise<IUser | null>;
}