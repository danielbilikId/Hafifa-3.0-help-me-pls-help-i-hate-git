import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import logger from '../logger';
import createDuty, { getDutiesById, getDutiesByQuery } from '../repository/dutyRepo';
import { dutySearchSchema } from '../repository/dutySchemaValidation';

export default async function insertDuty(req:Request, res:Response) {
  try {
    const savedDuty = await createDuty(req.body);
    res.status(201).send(savedDuty);
  } catch (err) {
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
  const { id } = req.params;
  const soldierByID = await getDutiesById(id);
  if (soldierByID == null) {
    res.send(404);
  } else {
    res.status(200).send(soldierByID);
  }
}
