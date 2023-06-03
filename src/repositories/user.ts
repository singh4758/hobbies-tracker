import { Db, Collection, AggregationCursor, ObjectId } from 'mongodb';
import { IUser, IUserRepository } from '../interface/IUser';

export class UserRepository implements IUserRepository {
  private collection: Collection<IUser>;

  constructor(db: Db) {
    this.collection = db.collection('users');
  }

  async aggregate<T>(pipeline: any[]): Promise<T[]> {
    const cursor = this.collection.aggregate(pipeline) as AggregationCursor<T>;
    return cursor.toArray();
  }

  async addUser(user: IUser): Promise<void> {
    await this.collection.insertOne(user);
  }

  async findUser(id: ObjectId): Promise<IUser | null> {
      return this.collection.findOne({ _id: id });
  }
}