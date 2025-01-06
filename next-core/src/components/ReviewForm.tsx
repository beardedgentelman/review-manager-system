"use client";

import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {Review} from "@/lib/types";
import {createReview, updateReview} from "@/lib/actions";
import {CommonButton} from "@/components/ui/CommonButton";

interface ReviewFormInputs {
  title: string;
  content: string;
  rating: number;
  author: string;
}

interface ReviewFormProps {
  review?: Review;
}

export const ReviewForm = ({review}: ReviewFormProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<ReviewFormInputs>({
    defaultValues: review,
  });
  const router = useRouter();

  const onSubmit = async (data: ReviewFormInputs) => {
    if (review) {
      await updateReview(review.id, data)
    } else {
      await createReview(data);
    }
    router.push("/");
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-full h-full space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
              id="title"
              type="text"
              className={`mt-1 block w-full border rounded p-2 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
              {...register('title', {required: 'Title is required'})}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="flex-1">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
              id="content"
              className={`mt-1 block h-[35vh] max-h-[35vh] w-full border rounded p-2 ${errors.content ? 'border-red-500' : 'border-gray-300'}`}
              {...register('content', {required: 'Content is required'})}
          ></textarea>
          {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (1 to 5)</label>
          <input
              id="rating"
              type="number"
              className={`mt-1 block w-full border rounded p-2 ${errors.rating ? 'border-red-500' : 'border-gray-300'}`}
              {...register('rating', {
                required: 'Rating is required',
                valueAsNumber: true,
                min: {value: 1, message: 'Minimum rating is 1'},
                max: {value: 5, message: 'Maximum rating is 5'},
              })}
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
          <input
              id="author"
              type="text"
              className={`mt-1 block w-full border rounded p-2 ${errors.author ? 'border-red-500' : 'border-gray-300'}`}
              {...register('author', {required: 'Author is required'})}
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
        </div>

        <div className='flex justify-between'>
          <CommonButton type="submit" label='Submit'/>
          <CommonButton type="reset" label='Reset'/>
        </div>
      </form>
  );
};
