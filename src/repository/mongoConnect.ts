import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
import logger from '../logger';

dotenv.config();
let db:Db;
export async function connectToMongoDB() {
  const client = new MongoClient(process.env.MONGO!);

  try {
    await client.connect();
    logger.info('Connected to MongoDB');
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    logger.info('Error connecting to MongoDB:', error);
  }
}

export const getDatabase = ():Db => db;
