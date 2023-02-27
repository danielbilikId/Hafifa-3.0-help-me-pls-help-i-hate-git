import request from "supertest";
import  app from "./app";

describe('IsSoldierAlive', () => {
    it('SendAPIGetRequestIfSoldierIsAliveExpected200:', () => {
        request(app).get('/health').expect("I am alive!");
    });
});