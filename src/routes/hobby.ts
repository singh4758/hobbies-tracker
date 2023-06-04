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
  /**
   * @swagger
   * /hobbies:
   *   post:
   *     summary: Add a hobby to user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               hobbyName:
   *                 type: string
   *               passionLevel:
   *                 type: string
   *                 enum:
   *                   - Low
   *                   - Medium
   *                   - High
   *                   - Very-High
   *               year:
   *                 type: number
   *               userId:
   *                 type: string
   *             example:
   *               hobbyName: 'Playing chess'
   *               passionLevel: 'Low'
   *               year: 2006
   *               userId: "647b8437a2448f575076347e"
   *     responses:
   *       200:
   *         description: hobby added successfully
   */
    this.router.post('/', validateRequest(hobyPostSchema, 'body'), this.controller.addHobby.bind(this.controller));
    
  /**
   * @swagger
   * /hobbies/{id}:
   *   delete:
   *     summary: Remove hobby
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: hobby remove successfully
   */
    this.router.delete('/:id', validateRequest(hobbyDeleteSchema, 'params'), this.controller.removeHobby.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}