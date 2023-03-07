import type { Collection } from 'mongodb';
import { TypeOf } from 'zod';
import logger from '../logger';
import { getDatabase } from './mongoConnect';
import { soldierSchema } from './soldierSchemaValidation';

type Soldier = TypeOf<typeof soldierSchema>;

let soldierCollection: Collection;

const initSoldierCollection = async () => {
  if (!soldierCollection) soldierCollection = getDatabase().collection('soldiers');
};

export async function createSoldier(soldier:Soldier) {
  await initSoldierCollection();
  try {
    await soldierCollection.createIndex({ id: 1 }, { unique: true });
    logger.info(soldier.duties);
    if (soldier.duties == null) {
      soldier.duties = [];
      logger.info(soldier.duties);
    }
    soldierSchema.parse(soldier);
    await soldierCollection.insertOne(soldier);
    return soldier;
  } catch (err) {
    logger.info(err);
    throw err;
  }
}
export async function getSoldiers(searchId:string) {
  await initSoldierCollection();
  return soldierCollection.findOne(
    { id: searchId },
    { projection: { _id: 0 } },
  );
}
export async function getSoldiersByQuery(SearchQuery:any) {
  return soldierCollection.find(SearchQuery).toArray();
}
