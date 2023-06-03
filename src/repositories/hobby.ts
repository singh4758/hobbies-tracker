import { Db, Collection, ObjectId } from 'mongodb';
import { IHobby, IHobbyRepository } from "../interface/IHobby";

export class HobbyRepository implements IHobbyRepository {
  private collection: Collection<IHobby>;

  constructor(db: Db) {
    this.collection = db.collection('hobbies');
  }

  async addHobby(hobby: IHobby): Promise<void> {
    await this.collection.insertOne(hobby);
  }

  async removeHobby(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) });
  }
}