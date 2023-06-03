import { IHobbyService, IHobbyRepository, IHobby } from "../interface/IHobby";

export class HobbyService implements IHobbyService {
  private hobbyRepository: IHobbyRepository;

  constructor(hobbyRepository: IHobbyRepository) {
    this.hobbyRepository = hobbyRepository;
  }

  async addHobby(hobby: IHobby): Promise<void> {
    await this.hobbyRepository.addHobby(hobby);
  }

  async removeHobby(id: string): Promise<void> {
    await this.hobbyRepository.removeHobby(id);
  }
}