import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { insertSoldier, getSoldierByID, findSoldierByQuery } from '../controller/SoldierController';
import checkHealth from '../controller/HealthController';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import insertDuty, { findDutyByID, findDutyByQuery } from '../controller/DutyController';
>>>>>>> 29ea72b (source)
=======
import {
  deleteDuty, insertDuty, findDutyByID, findDutyByQuery, updateDuty,
} from '../controller/DutyController';
>>>>>>> 998f373 (Duty Services)

const router = express();
router.use(helmet());

router.use(bodyParser());

router.get('/health', checkHealth);

router.post('/soldiers', insertSoldier);

router.get('/soldiers/:id', getSoldierByID);

router.get('/soldiers', findSoldierByQuery);

<<<<<<< HEAD
=======
router.post('/duties', insertDuty);

router.get('/duties', findDutyByQuery);

router.get('/duties/:id', findDutyByID);

<<<<<<< HEAD
>>>>>>> 29ea72b (source)
=======
router.delete('/duties/:id', deleteDuty);

router.patch('/duties/:id', updateDuty);

>>>>>>> 998f373 (Duty Services)
export default router;
