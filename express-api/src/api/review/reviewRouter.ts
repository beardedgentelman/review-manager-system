import {Router} from 'express';
import {createReview, getAllReviews, getReviewById, updateReview, deleteReview} from './reviewController';
import {validate} from "@/common/middleware/validate";
import {
  CreateReviewSchema,
  GetReviewSchema, GetReviewsSchema,
  RemoveReviewSchema,
  UpdateReviewSchema
} from "@/api/review/reviewModel";

const router = Router();

router.post('/', validate(CreateReviewSchema), createReview);
router.get('/', validate(GetReviewsSchema), getAllReviews);
router.get('/:id', validate(GetReviewSchema), getReviewById);
router.put('/:id', validate(UpdateReviewSchema), updateReview);
router.delete('/:id', validate(RemoveReviewSchema), deleteReview);

export default router;
