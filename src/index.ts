import express from 'express';
import { MongoClient, Db } from 'mongodb';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

async function startServer(): Promise<void> {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL as string);
    const db: Db = client.db('mydatabase');

    app.use(express.json());

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer().catch(console.error);