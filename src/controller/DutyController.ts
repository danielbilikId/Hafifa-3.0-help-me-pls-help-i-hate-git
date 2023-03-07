import { Request, Response } from 'express';
import createDuty, {
  updatebyId, getDutiesById, getDutiesByQuery, deleteDutybyId,
} from '../repository/dutyRepo';
import { dutySearchSchema, dutyUpdateSchema } from '../repository/dutySchemaValidation';

export async function insertDuty(req:Request, res:Response) {
  const savedDuty = await createDuty(req.body);
  if (savedDuty !== null) {
    res.status(201).send(savedDuty);
  } else {
    res.sendStatus(400);
  }
}

export async function findDutyByQuery(req:Request, res:Response) {
  try {
    const validateQuery = dutySearchSchema.parse(req.query);
    const dutyByQuery = await getDutiesByQuery(validateQuery);
    if (dutyByQuery.length === 0) {
      res.send([]);
    } else {
      res.status(200).send(dutyByQuery);
    }
  } catch (err) {
    res.status(404).send('duty not found, wrong query');
  }
}
export async function findDutyByID(req:Request, res:Response) {
  const dutiesById = await getDutiesById(req.params);
  if (dutiesById == null) {
    res.send(404);
  } else {
    res.status(200).send(dutiesById);
  }
}
export async function deleteDuty(req:Request, res:Response) {
  const dutiesById = await getDutiesById(req.params);
  if (dutiesById == null) {
    res.send(404);
  } else if (dutiesById.soldiers.length !== 0) {
    res.send(404);
  } else {
    await deleteDutybyId(req.params);
    res.send('soldier deleted!');
  }
}

export async function updateDuty(req:Request, res:Response) {
  const dutiesById = await getDutiesById(req.params);
  if (dutiesById == null) {
    res.send(404);
  } else if (dutiesById.soldiers.length !== 0) {
    res.send('scheduled duty');
  } else {
    dutyUpdateSchema.parse(req.body);
    await updatebyId(req.params, req.body);
    const updatedDutybyId = await getDutiesById(req.params);
    res.send(updatedDutybyId);
  }
}
