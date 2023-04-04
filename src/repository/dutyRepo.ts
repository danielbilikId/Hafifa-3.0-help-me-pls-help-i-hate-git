import { ObjectId } from 'mongodb';
import { TypeOf } from 'zod';
import { dutySchema } from './dutySchemaValidation';
import { getDatabase } from './mongoConnect';

type Duty = TypeOf<typeof dutySchema>;
export default async function createDuty(duty:Duty) {
  try {
    if (duty.soldiers == null) {
      duty.soldiers = [];
    }
    duty.time.start = new Date(duty.time.start);
    duty.time.end = new Date(duty.time.end);
    dutySchema.parse(duty);
    await getDatabase().collection('duties').insertOne(duty);
    return duty;
  } catch (err) {
    return null;
  }
}
export async function getDutiesByQuery(SearchQuery:any) {
  return getDatabase().collection('duties').find(SearchQuery).toArray();
}
export async function getDutiesById(searchId:any) {
  return getDatabase().collection('duties').findOne({ _id: new ObjectId(searchId) });
}

export async function deleteDutybyId(searchId:any) {
  return getDatabase().collection('duties').deleteOne({ _id: new ObjectId(searchId) });
}

export async function updatebyId(searchId:any, updateFields:Duty) {
  return getDatabase().collection('duties').updateOne({ _id: new ObjectId(searchId) }, { $set: updateFields });
}
