import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { HobbyController } from './controller/hobby';
import { UserController } from './controller/user';
import { HobbyRepository } from './repositories/hobby';
import { UserRepository } from './repositories/user';
import { HobbyRoutes } from './routes/hobby';
import { UserRoutes } from './routes/user';
import { HobbyService } from './service/hobby';
import { UserService } from './service/user';
import { UserModel } from './models/user';
import { HobbyModel } from './models/hobby';
import { setupSwagger } from './libs/swagger';

const app = express();
const port = process.env.PORT || 3000;

async function startServer(): Promise<void> {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DATABASE_NAME}` as string)
    const userRepository = new UserRepository(UserModel);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const userRoutes = new UserRoutes(userController);

    const hobbyRepository = new HobbyRepository(HobbyModel);
    const hobbyService = new HobbyService(hobbyRepository, userService);
    const hobbyController = new HobbyController(hobbyService);
    const hobbyRoutes = new HobbyRoutes(hobbyController);

    app.use(express.json());
    app.use('/users', userRoutes.getRouter());
    app.use('/hobbies', hobbyRoutes.getRouter());

    setupSwagger(app);

    app.use((req: Request, res: Response) => {
      res.status(404).send('Not Found');
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer().catch(console.error);