import request from 'supertest';
import router from '../src/routes/routes';
import * as soldiers from './testData';
import { getDatabase, connectToMongoDB } from '../src/repository/mongoConnect';

const app = router;
beforeEach(async () => {
  await connectToMongoDB();
});
describe('Insert Soldier into DB', () => {
  it('Should Send an API Post Request and save soldier to DB, Expected 201:', async () => {
    await request(app).post('/soldiers').send(soldiers.SoldierToBeAddedForPOSTtest).expect(201);
  });
  it('Should Send an API Post Request and not save soldier to DB, Expected 400:', async () => {
    await request(app).post('/soldiers').send(soldiers.SoldierToBeAddedForFailedPOSTtest).expect(400);
  });
  it('try to save soldier with same ID as existing db soldier', async () => {
    await request(app).post('/soldiers').send(soldiers.SoldierToBeAddedForPOSTtest).expect(400);
  });
});

describe('Find Soldier By ID', () => {
  it('Should return soldier from db by id', async () => {
    await getDatabase().collection('soldiers').insertOne(soldiers.SoldierToBeFound);
    request(app).get(`/soldiers/${soldiers.SoldierToBeFound.id}`).expect(soldiers.SoldierToBeFound);
    request(app).get('/soldiers/505').expect(404);
  });
});

describe('Search for Soldier by query in DB', () => {
<<<<<<< HEAD
  it('Should Send an API Get Request and see if Soldier is in DB, Expected 200:', async () => {
=======
  it('Should Send an Get Request and see if Soldier is in DB, Expected 200:', async () => {
>>>>>>> 29ea72b (source)
    await getDatabase().collection('soldiers').deleteMany({});
    await getDatabase().collection('soldiers').insertOne(soldiers.SoldierToSearch);
    request(app).get(`/soldiers?name=${soldiers.SoldierToSearch.name}&rank=${soldiers.SoldierToSearch.rank}`).expect(soldiers.SoldierToSearch);
  });
  it('Should Send an API Get Request and not find Soldier in DB, Expected 404:', async () => {
    await request(app).get('/soldiers?name=Luke&rank=Skywalker&lightsaber=blue').expect(404);
  });
});
