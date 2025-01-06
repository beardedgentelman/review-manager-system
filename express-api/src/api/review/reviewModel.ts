import {z} from "zod";

import {commonValidations} from "@/common/utils/commonValidation";

export type Review = z.infer<typeof ReviewSchema>;
export const ReviewSchema = z.object({
  title: z.string().nonempty({message: 'Title cannot be empty'}),
  content: z.string().nonempty({message: 'Content cannot be empty'}),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  author: z.string().nonempty({message: 'Author cannot be empty'}),
});

export const GetReviewSchema = z.object({
  params: z.object({id: commonValidations.id}),
});

export const GetReviewsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    title: z.string().optional(),
    author: z.string().optional(),
    rating: z.string().optional()
  }),
});

export const RemoveReviewSchema = z.object({
  params: z.object({id: commonValidations.id}),
});

export const UpdateReviewSchema = z.object({
  params: z.object({id: commonValidations.id}),
  body: ReviewSchema.partial(),
});

export const CreateReviewSchema = z.object({
  body: ReviewSchema
});
