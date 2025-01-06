"use client";

import {Review as ReviewType} from "@/lib/types";
import {Pen, Trash2} from "lucide-react";

interface ReviewProps {
  review: ReviewType;
  onDelete: (id: ReviewType) => void;
  onEdit: (id: ReviewType) => void;
}

export const Review = ({review, onEdit, onDelete}: ReviewProps) => {
  return (
      <div
          className="relative max-md:hidden flex w-full py-4 px-6 justify-between items-center hover:border-y hover:bg-amber-50 hover:scale-105 transition duration-300"
      >
        <div className="flex flex-col">
          <h3 className="font-bold min-w-0">{review.title}</h3>
          <p className="mr-5 min-w-0 md:max-w-md truncate">{review.content}</p>
          <small className='flex min-w-0'>By {review.author} | Rating: {review.rating}</small>
        </div>
        <div className="flex gap-3">
          <button
              onClick={() => onEdit(review)}
              type='button'
              title='Edit'
              className="text-blue-500 hover:opacity-70"
          >
            <Pen/>
          </button>
          <button
              onClick={() => onDelete(review)}
              type='button'
              title='Delete'
              className="text-red-500 hover:opacity-70"
          >
            <Trash2/>
          </button>
        </div>
      </div>
  );
};

export const SmallReview = ({review, onEdit, onDelete}: ReviewProps) => {
  return (
      <div
          onClick={() => onEdit(review)}
          className="relative flex w-full py-4 px-6 justify-between items-start bg-white rounded-md shadow-md transition duration-300 cursor-pointer"
      >
        <div className="flex flex-col">
          <h3 className="font-bold min-w-0">{review.title}</h3>
          <p className="text-gray-500 flex min-w-0">
            By {review.author} | Rating: {review.rating}
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(review);
              }}
              type="button"
              title="Delete"
              className="text-red-500 hover:opacity-70"
          >
            <Trash2/>
          </button>
        </div>
      </div>
  );
};