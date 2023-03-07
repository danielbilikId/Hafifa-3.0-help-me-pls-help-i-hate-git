import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import { checkHealth,getSoldierByID,getSoldierByQuery,addSoldier } from '../controller/controller';
import bodyParser from 'body-parser';

const router = express(); 
router.use(helmet());
router.use(bodyParser());

router.get('/health',checkHealth); 

router.post('/soldiers',addSoldier); 

router.get('/soldiers/:id', getSoldierByID); 

router.get('/soldiers', getSoldierByQuery); 

export default router;