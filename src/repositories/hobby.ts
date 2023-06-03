import { Db, Collection, ObjectId } from 'mongodb';
import { IHobby, IHobbyRepository } from "../interface/hobby";
import { HobbyModel } from '../models/hobby';

export class HobbyRepository implements IHobbyRepository {
  private hobbyModel: typeof HobbyModel;

  constructor(userModel: typeof HobbyModel) {
    this.hobbyModel = userModel;
  }
  findHobby(id: ObjectId): Promise<IHobby | null> {
    return this.hobbyModel.findOne({ _id: id });
  }

  async addHobby(hobby: IHobby): Promise<void> {
    await this.hobbyModel.create(hobby);
  }

  async removeHobby(id: ObjectId): Promise<void> {
    await this.hobbyModel.deleteOne({ _id: id });
  }
}