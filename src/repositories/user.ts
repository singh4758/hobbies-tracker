import { Db, Collection, ObjectId } from 'mongodb';
import { IUser, IUserRepository, IUserWithHobbies } from '../interface/IUser';

export class UserRepository implements IUserRepository {
  private collection: Collection<IUser>;

  constructor(db: Db) {
    this.collection = db.collection('users');
  }
  async aggregation<T extends Document>(aggregationPipeline: any[]): Promise<T[]> {
    let docs =  this.collection.aggregate<T>(aggregationPipeline)

    return docs.toArray();
  }

  async addUser(user: IUser): Promise<void> {
    await this.collection.insertOne(user);
  }
}