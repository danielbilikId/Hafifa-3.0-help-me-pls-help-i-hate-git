import { ObjectId } from 'mongodb';
import { TypeOf } from 'zod';
import logger from '../logger';
import { dutySchema } from './dutySchemaValidation';
import { getDatabase } from './mongoConnect';

type Duty = TypeOf<typeof dutySchema>;
export default async function createDuty(duty:Duty) {
  try {
    if (duty.soldiers == null) {
      duty.soldiers = [];
    }
    duty.time.end = new Date(duty.time.end);
    duty.time.start = new Date(duty.time.start);
    dutySchema.parse(duty);
    await getDatabase().collection('duties').insertOne(duty);
    return duty;
  } catch (err) {
    logger.info(err);
    throw err;
  }
}
export async function getDutiesByQuery(SearchQuery:any) {
  return getDatabase().collection('duties').find(SearchQuery).toArray();
}
export async function getDutiesById(searchId:any) {
  return getDatabase().collection('duties').findOne(searchId);
}
