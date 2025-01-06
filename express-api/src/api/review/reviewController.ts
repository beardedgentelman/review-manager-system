import {Request, Response, NextFunction} from 'express';
import {
  createReviewService,
  getAllReviewsService,
  getReviewByIdService,
  updateReviewService,
  deleteReviewService
} from "@/api/review/reviewService";
import {Review} from "@/api/review/reviewModel";

export const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const review = await createReviewService(req.body as Review);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const getAllReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {page, title, author, rating} = req.query;
    const reviews = await getAllReviewsService({
      page: Number(page) || 1,
      author: author?.toString(),
      title: title?.toString(),
      rating: Number(rating)
    });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

export const getReviewById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const review = await getReviewByIdService(Number(id));
    res.json(review);
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const review = await updateReviewService(Number(id), req.body as Partial<Review>);
    res.json(review);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    await deleteReviewService(Number(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
