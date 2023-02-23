import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.get('/health', (req:Request, res:Response) => {
  res.sendStatus(200);
});
export default app;
module.exports = app;