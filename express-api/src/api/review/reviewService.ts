import prisma from '@/common/utils/prismaClient';
import {env} from "@/common/utils/envConfig";
import {Review} from "@/api/review/reviewModel";

interface ReviewFilters {
  page: number;
  author?: string;
  rating?: number;
  title?: string;
}

type ReviewFiltersWhere = Omit<ReviewFilters, "page">;

export const createReviewService = async (data: Review) => {
  return prisma.review.create({data});
};

export const getAllReviewsService =
    async ({title, author, rating, page}: ReviewFilters) => {
      const pageLimit = env.DEFAULT_PAGE_LIMIT;

      const filters: ReviewFiltersWhere = {};
      if (title) filters.title = title;
      if (author) filters.author = author;
      if (rating) filters.rating = rating;

      const reviews = await prisma.review.findMany({
        take: pageLimit,
        skip: (page - 1) * pageLimit,
        where: filters,
        orderBy: {createdAt: 'desc'},
      });

      const totalCount = await prisma.review.count({where: filters});

      return {reviews, totalCount};
    };

export const getReviewByIdService = async (id: number) => {
  return prisma.review.findUnique({where: {id}});
};

export const updateReviewService = async (id: number, data: Partial<Review>) => {
  return prisma.review.update({where: {id}, data});
};

export const deleteReviewService = async (id: number) => {
  return prisma.review.delete({where: {id}});
};
