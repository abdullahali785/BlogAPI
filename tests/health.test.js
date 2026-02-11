const request = require("supertest");
const app = require("../index");

describe("GET /posts", () => {
    it("should return 200", async () => {
        await request(app).get("/posts").expect(200);
    });
});
