import express from 'express';
import { MongoClient, Db } from 'mongodb';
import 'dotenv/config'
import { HobbyController } from './controller/hobby';
import { UserController } from './controller/user';
import { HobbyRepository } from './repositories/hobby';
import { UserRepository } from './repositories/user';
import { HobbyRoutes } from './routes/hobby';
import { UserRoutes } from './routes/user';
import { HobbyService } from './service/hobby';
import { UserService } from './service/user';

const app = express();
const port = process.env.PORT || 3000;

async function startServer(): Promise<void> {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL as string);
    const db: Db = client.db(process.env.DATABASE_NAME as string);
    const userRepository = new UserRepository(db);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const userRoutes = new UserRoutes(userController);

    const hobbyRepository = new HobbyRepository(db);
    const hobbyService = new HobbyService(hobbyRepository, userService);
    const hobbyController = new HobbyController(hobbyService);
    const hobbyRoutes = new HobbyRoutes(hobbyController);

    app.use(express.json());
    app.use('/users', userRoutes.getRouter());
    app.use('/hobbies', hobbyRoutes.getRouter());

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer().catch(console.error);