import { Request, Response } from 'express';
import { soldierSearchSchema } from '../repository/soldierSchemaValidation';
import { createSoldier, getSoldiers, getSoldiersByQuery } from '../repository/soldierRepo';

export async function insertSoldier(req:Request, res:Response) {
  try {
    const savedSoldier = await createSoldier(req.body);
    res.status(201).send(savedSoldier);
  } catch (err) {
    res.sendStatus(400);
  }
}

export async function getSoldierByID(req:Request, res:Response) {
  const { id } = req.params;
  const soldierByID = await getSoldiers(id);
  if (soldierByID == null) {
    res.send(404);
  } else {
    res.status(200).send(soldierByID);
  }
}

export async function findSoldierByQuery(req:Request, res:Response) {
  try {
    const validateQuery = soldierSearchSchema.parse(req.query);
    const soldierByQuery = await getSoldiersByQuery(validateQuery);
    if (soldierByQuery.length === 0) {
      res.send([]);
    } else {
      res.status(200).send(soldierByQuery);
    }
  } catch (err) {
    res.status(404).send('soldier not found, wrong query');
  }
}
