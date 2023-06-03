import express, { Router } from 'express';
import { HobbyController } from '../controller/hobby';
import { validateRequest } from '../middleware/validateRequest';
import { hobbyDeleteSchema, hobyPostSchema } from '../reqBodySchema/hobby/hobby';

export class HobbyRoutes {
  private readonly router: Router;
  private readonly controller: HobbyController;

  constructor(controller: HobbyController) {
    this.router = express.Router();
    this.controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', validateRequest(hobyPostSchema, 'body'), this.controller.addHobby.bind(this.controller));
    this.router.delete('/:id', validateRequest(hobbyDeleteSchema, 'params'), this.controller.removeHobby.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}