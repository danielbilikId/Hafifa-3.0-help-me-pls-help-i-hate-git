import request from 'supertest';
import router from '../src/routes/routes';
import * as duties from './dutyTestData';
import { getDatabase, connectToMongoDB } from '../src/repository/mongoConnect';

const app = router;

beforeEach(async () => {
  await connectToMongoDB();
});
describe('Insert Duty into DB', () => {
  it('Should Send an API Post Request and save Duty to DB, Expected 201:', async () => {
    await request(app).post('/duties').send(duties.DutyToBeAddedForPOSTtest).expect(201);
  });
  it('Should Send an API Post Request and not save Duty to DB, Expected 400:', async () => {
    await request(app).post('/duties').send(duties.DutyToBeAddedForFailedPOSTtest).expect(400);
  });
});

describe('Find Duty By ID', () => {
  it('Should return Duty from db by id', async () => {
    await getDatabase().collection('duties').insertOne(duties.DutyToBeFound);
    request(app).get(`/duties/${duties.DutyToBeFound._id}`).expect(duties.DutyToBeFound);
    request(app).get('/duties/505').expect(404);
  });
});

describe('Search for Duty by query in DB', () => {
  it('Should Send an Get Request and see if Duty is in DB, Expected 200:', async () => {
    await getDatabase().collection('duties').deleteMany({});
    await getDatabase().collection('duties').insertOne(duties.DutyToSearch);
    request(app).get(`/duties?name=${duties.DutyToSearch.name}&location=${duties.DutyToSearch.location}`).expect(duties.DutyToSearch);
  });
  it('Should Send an API Get Request and not find Duty in DB, Expected 404:', async () => {
    await request(app).get('/duties?name=Luke&rank=Skywalker&lightsaber=blue').expect(404);
  });
});
