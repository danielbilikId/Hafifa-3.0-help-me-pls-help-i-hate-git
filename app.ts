//const express = require('express'); 
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

const app = express();

// Add middleware
app.use(helmet());

// Define routes
app.get('/health', (req:Request, res:Response) => {
  res.sendStatus(200);
});
export default app;
module.exports = app; 