import { Request, Response } from 'express';

function checkHealth(req:Request, res:Response) {
  res.send('I am alive!');
}

export default checkHealth;
