"use server";

import axios from "axios";
import {DashboardSearchParams, Review} from "@/lib/types";

export const fetchReviews = async (params: DashboardSearchParams) => {
  const response =
      await axios.get<{
        reviews: Review[],
        totalCount: number
      }>(process.env.BACKEND_API_URL + '/reviews', {params});
  return response.data;
};

export const fetchReview = async (id: string) => {
  const response =
      await axios.get<Review>(process.env.BACKEND_API_URL + '/reviews/' + id);
  return response.data;
};

export const updateReview = async (id: number, data: Partial<Review>) => {
  const response =
      await axios.put<Review>(process.env.BACKEND_API_URL + '/reviews/' + id, data);
  return response.data;
};

export const deleteReview = async (id: number) => {
  await axios.delete(process.env.BACKEND_API_URL + '/reviews/' + id);
};

export const createReview = async (data: Omit<Review, 'id'>) => {
  const response =
      await axios.post<Review>(process.env.BACKEND_API_URL + '/reviews', data);
  return response.data;
};