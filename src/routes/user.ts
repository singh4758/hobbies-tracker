import express, { Router } from 'express';
import { UserController } from '../controller/user';
import { validateRequest } from '../middleware/validateRequest';
import { getUsers, userPostSchema } from '../reqBodySchema/user/user';

export class UserRoutes {
  private readonly router: Router;
  private readonly controller: UserController;

  constructor(controller: UserController) {
    this.router = express.Router();
    this.controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', validateRequest(getUsers, 'query'), this.controller.getAllUsersWithHobbies.bind(this.controller));
    this.router.post('/', validateRequest(userPostSchema, 'body'), this.controller.addUser.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}