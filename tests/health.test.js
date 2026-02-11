import request from "supertest";
import app from "../index.js";

describe("GET /posts", () => {
    it("should return 200", async () => {
        await request(app).get("/posts").expect(200);
    });
});
