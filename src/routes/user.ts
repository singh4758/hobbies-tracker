import express, { Router } from 'express';
import { UserController } from '../controller/user';

export class UserRoutes {
  private readonly router: Router;
  private readonly controller: UserController;

  constructor(controller: UserController) {
    this.router = express.Router();
    this.controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.controller.getAllUsersWithHobbies.bind(this.controller));
    this.router.post('/', this.controller.addUser.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}