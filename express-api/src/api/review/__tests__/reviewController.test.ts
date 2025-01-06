import request from "supertest";
import {app} from "@/server";

describe("Review Controller", () => {
  it("should create a new review", async () => {
    const response = await request(app).post("/reviews/new").send({
      title: "Test Review",
      content: "This is a test review",
      rating: 5,
      author: "Test Author"
    });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: "Test Review",
          content: "This is a test review",
          rating: 5,
          author: "Test Author"
        })
    );
  });

  it("should return all reviews", async () => {
    const response = await request(app).get("/reviews");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.objectContaining({
          reviews: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              title: expect.any(String),
              content: expect.any(String),
              rating: expect.any(Number),
              author: expect.any(String),
            }),
          ]),
          totalCount: expect.any(Number),
        })
    );
  });

  it("should return a single review by id", async () => {
    const response = await request(app).get("/reviews/7");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.objectContaining({
          id: 7,
          title: expect.any(String),
          content: expect.any(String),
          rating: expect.any(Number),
          author: expect.any(String)
        })
    );
  });

  it("should update a single review", async () => {
    const response = await request(app)
        .put("/reviews/1")
        .send({title: "Updated Test Review"});

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.objectContaining({
          id: 1,
          title: "Updated Test Review",
          content: expect.any(String),
          rating: expect.any(Number),
          author: expect.any(String)
        })
    );
  });

  it("should delete a single review", async () => {
    const response = await request(app).delete("/reviews/1");

    expect(response.status).toBe(204);
  });
});