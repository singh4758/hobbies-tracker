import { IUser, IUserRepository, IUserService, IUserWithHobbies } from "../interface/IUser";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUsersWithHobbies(): Promise<IUserWithHobbies[]> {

    const pipeline = [
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
    ]

    return this.userRepository.aggregate<IUserWithHobbies>(pipeline);
  }
  addUser(user: IUser): Promise<void> {
    return this.userRepository.addUser(user);;
  }
}