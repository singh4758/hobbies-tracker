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
  getUsersWithHobbies(): Promise<IUserWithHobbies[]>;
  addUser(user: IUser): Promise<void>;
}