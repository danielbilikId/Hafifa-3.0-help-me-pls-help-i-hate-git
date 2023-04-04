import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { insertSoldier, getSoldierByID, findSoldierByQuery } from '../controller/SoldierController';
import checkHealth from '../controller/HealthController';
import {
  deleteDuty, insertDuty, findDutyByID, findDutyByQuery, updateDuty,
} from '../controller/DutyController';

const router = express();
router.use(helmet());

router.use(bodyParser());

router.get('/health', checkHealth);

router.post('/soldiers', insertSoldier);

router.get('/soldiers/:id', getSoldierByID);

router.get('/soldiers', findSoldierByQuery);

router.post('/duties', insertDuty);

router.get('/duties', findDutyByQuery);

router.get('/duties/:id', findDutyByID);

router.delete('/duties/:id', deleteDuty);

router.patch('/duties/:id', updateDuty);

export default router;
