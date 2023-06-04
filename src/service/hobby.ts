import { ObjectId } from "mongodb";
import { IHobbyService, IHobbyRepository, IHobby } from "../interface/hobby";
import { IUserService } from "../interface/user";

export class HobbyService implements IHobbyService {
  private hobbyRepository: IHobbyRepository;
  private userService: IUserService;

  constructor(hobbyRepository: IHobbyRepository, userService: IUserService) {
    this.hobbyRepository = hobbyRepository;
    this.userService = userService;
  }

  async addHobby(hobby: IHobby): Promise<void> {

    const { userId } = hobby;

    const user = await this.userService.findUser(userId);

    if(!user) {
      throw { message: "user not exist" };
    }

    await this.hobbyRepository.addHobby(hobby);
  }

  async removeHobby(id: ObjectId): Promise<void> {
    const hobby = await this.hobbyRepository.findHobby(id);

    if(!hobby) {
      throw { message: "hobby not exist" };
    }

    await this.hobbyRepository.removeHobby(id);
  }
}