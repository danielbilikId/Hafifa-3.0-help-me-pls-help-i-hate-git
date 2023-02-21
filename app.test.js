const request = require('supertest');
const app = require("./app");

describe('Test Healthy connection', () => {
    it('Test health:', () => {
        request(app).get('/health').expect(200)
    });
});
