import { Db, Collection, ObjectId } from 'mongodb';
import { IUser, IUserRepository, IUserWithHobbies } from '../interface/IUser';

export class UserRepository implements IUserRepository {
  private collection: Collection<IUser>;

  constructor(db: Db) {
    this.collection = db.collection('users');
  }
  async getUsersWithHobbies(): Promise<IUserWithHobbies[]> {
    let users =  await this.collection.aggregate<IUserWithHobbies>([
      {
        '$lookup': {
          'from': 'hobbies', 
          'localField': '_id', 
          'foreignField': 'userId', 
          'as': 'hobbies'
        }
      }, {
        '$skip': 10
      }, {
        '$limit': 10
      }
    ])

    return users.toArray();
  }

  async addUser(user: IUser): Promise<void> {
    await this.collection.insertOne(user);
  }
}