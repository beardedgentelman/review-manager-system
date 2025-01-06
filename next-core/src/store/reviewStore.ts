"use client";

import {create} from 'zustand';
import {Review} from "@/lib/types";

interface ReviewStore {
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  reviews: [],
  setReviews: (reviews) => {
    set(() => ({
      reviews
    }))
  }
}));
