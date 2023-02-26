import request from "supertest";
import  app from "./app";

describe('Test Healthy connection', () => {
    it('Test health:', () => {
        request(app).get('/health').expect(200);
    });
});