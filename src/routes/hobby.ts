import express, { Router } from 'express';
import { HobbyController } from '../controller/hobby';

export class HobbyRoutes {
  private readonly router: Router;
  private readonly controller: HobbyController;

  constructor(controller: HobbyController) {
    this.router = express.Router();
    this.controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', this.controller.addHobby.bind(this.controller));
    this.router.delete('/:id', this.controller.removeHobby.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}