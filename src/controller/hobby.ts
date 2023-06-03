import { Request, Response } from 'express';
import { HobbyService } from '../service/hobby';
import { ObjectId } from 'mongodb';

export class HobbyController {
  private readonly service: HobbyService;

  constructor(service: HobbyService) {
    this.service = service;
  }

  async addHobby(req: Request, res: Response): Promise<void> {
    try {
      const { hobbyName, passionLevel, year, userId } = req.body;
      const hobby = { hobbyName, passionLevel, year, userId: new ObjectId(userId) }

      await this.service.addHobby(hobby);
      res.json({ message: "hobby added successfully"});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async removeHobby(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.query;

      await this.service.removeHobby(new ObjectId(String(id)));
      res.json({ message: "hobby remove successfully"});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

}