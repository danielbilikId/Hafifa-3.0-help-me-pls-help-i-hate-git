import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import mongoose, { Collection } from 'mongoose';
const app = express();
app.use(helmet());
app.get('/health', (req:Request, res:Response) => {
  res.send("I am alive!");
});
export default app;