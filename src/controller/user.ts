import { Request, Response } from 'express';
import { UserService } from '../service/user';

export class UserController {
  private readonly service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  async getAllUsersWithHobbies(req: Request, res: Response): Promise<void> {
    try {
      const { limit = 10, skip = 0 } = req.query;
      const users = await this.service.getUsersWithHobbies(Number(skip), Number(limit));
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async addUser(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;
      const user = { name }

      await this.service.addUser(user);
      res.json({ message: "user registered successfully"});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}