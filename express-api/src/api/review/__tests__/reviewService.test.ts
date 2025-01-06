import {
  createReviewService,
  deleteReviewService,
  getAllReviewsService,
  getReviewByIdService,
  updateReviewService
} from "@/api/review/reviewService";

describe("Review Service", () => {
  it("should create a new review", async () => {
    const review = await createReviewService({
      title: "Test Review",
      content: "This is a test review",
      rating: 5,
      author: "Test Author",
    });

    expect(review).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: "Test Review",
          content: "This is a test review",
          rating: 5,
          author: "Test Author",
        })
    );
  });

  it("should return all reviews for 1st page", async () => {
    const reviews = await getAllReviewsService({page: 1});

    expect(reviews).toEqual(
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
    const review = await getReviewByIdService(7);

    expect(review).toEqual(
        expect.objectContaining({
          id: 7,
          title: expect.any(String),
          content: expect.any(String),
          rating: expect.any(Number),
          author: expect.any(String),
        })
    );
  });

  it("should update a single review", async () => {
    const review = await updateReviewService(1, {
      title: "Updated Test Review",
    });

    expect(review).toEqual(
        expect.objectContaining({
          id: 4,
          title: "Updated Test Review",
          content: expect.any(String),
          rating: expect.any(Number),
          author: expect.any(String),
        })
    );
  });

  it("should delete a single review", async () => {
    await deleteReviewService(6);
  });
});