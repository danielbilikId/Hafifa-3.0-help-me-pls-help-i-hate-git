import request from 'supertest';
import router from '../src/routes/routes';

const app = router;

describe('check health connection', () => {
  it('Should Send an API Get Request to the server, Expected 200:', () => {
    request(app).get('/health').expect(200);
  });
});
