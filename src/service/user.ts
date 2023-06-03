import { ObjectId } from "mongodb";
import { IUser, IUserRepository, IUserService, IUserWithHobbies } from "../interface/user";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  findUser(id: ObjectId): Promise<IUser | null> {
    return this.userRepository.findUser(id);;
  }

  async getUsersWithHobbies(skip: number, limit: number): Promise<IUserWithHobbies[]> {

    const pipeline = [
      {
        '$lookup': {
          'from': 'hobbies', 
          'localField': '_id', 
          'foreignField': 'userId', 
          'as': 'hobbies'
        }
      }, {
        '$skip': skip
      }, {
        '$limit': limit
      }
    ]

    return this.userRepository.aggregate<IUserWithHobbies>(pipeline);
  }
  addUser(user: IUser): Promise<void> {
    return this.userRepository.addUser(user);
  }
}