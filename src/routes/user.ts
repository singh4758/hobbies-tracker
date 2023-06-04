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
  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Get all users with hobbies
   *     parameters:
   *       - in: query
   *         name: skip
   *         required: false
   *         schema:
   *           type: number
   *       - in: query
   *         name: limit
   *         required: false
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: OK
   */
    this.router.get('/', validateRequest(getUsers, 'query'), this.controller.getAllUsersWithHobbies.bind(this.controller));
 /**
   * @swagger
   * /users:
   *   post:
   *     summary: Create a new user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *             example:
   *               name: Abhishek Singh
   *     responses:
   *       200:
   *         description: user registered successfully
   */
    this.router.post('/', validateRequest(userPostSchema, 'body'), this.controller.addUser.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}