import {Review} from "@/lib/types";

export const reviews: Review[] = Array.from({length: 10}).map((_, i) => ({
  id: i + 1,
  title: `Review ${i + 1}`,
  content: `This is a test review ${i + 1}`,
  rating: i % 5 + 1,
  author: `Test Author ${i + 1}`,
}));