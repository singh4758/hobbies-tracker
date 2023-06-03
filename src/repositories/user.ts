import { Db, Collection, AggregationCursor, ObjectId } from 'mongodb';
import { UserModel } from '../models/user';
import { IUser, IUserRepository } from '../interface/user';

export class UserRepository implements IUserRepository {

  private userModel: typeof UserModel;

  constructor(userModel: typeof UserModel) {
    this.userModel = userModel;
  }
  async aggregate<T>(pipeline: any[]): Promise<T[]> {
    const users = this.userModel.aggregate<T>(pipeline);
    return users;
  }

  async addUser(user: IUser): Promise<void> {
    await this.userModel.create(user);
  }

  async findUser(id: ObjectId): Promise<IUser | null> {
      return this.userModel.findOne({ _id: id });
  }
}