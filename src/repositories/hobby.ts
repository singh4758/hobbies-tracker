import { Db, Collection, ObjectId } from 'mongodb';
import { IHobby, IHobbyRepository } from "../interface/hobby";

export class HobbyRepository implements IHobbyRepository {
  private collection: Collection<IHobby>;

  constructor(db: Db) {
    this.collection = db.collection('hobbies');
  }
  findHobby(id: ObjectId): Promise<IHobby | null> {
    return this.collection.findOne({ _id: id });
  }

  async addHobby(hobby: IHobby): Promise<void> {
    await this.collection.insertOne(hobby);
  }

  async removeHobby(id: ObjectId): Promise<void> {
    await this.collection.deleteOne({ _id: id });
  }
}