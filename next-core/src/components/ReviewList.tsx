"use client";

import {useReviewStore} from '@/store/reviewStore';
import {Fragment, startTransition, useEffect} from "react";
import {Review as ReviewType} from "@/lib/types";
import {Review, SmallReview} from "@/components/Review";
import {useRouter} from "next/navigation";
import {deleteReview} from "@/lib/actions";
import {useMediaQuery} from "react-responsive";
import {useShallow} from "zustand/react/shallow";


interface ReviewsProps {
  reviews: ReviewType[];
}

export const ReviewList = ({reviews}: ReviewsProps) => {
  const isMobile = useMediaQuery({maxWidth: 768})
  const router = useRouter();
  const {storedReviews, setReviews} = useReviewStore(useShallow(store => ({
    storedReviews: store.reviews,
    setReviews: store.setReviews
  })));

  const handleEdit = (review: ReviewType) => {
    router.push(`/reviews/${review.id}`);
  };

  const handleDelete = async (review: ReviewType) => {
    if (!confirm(`Are you sure you want to delete this review "${review.title}"?`)) return;
    startTransition(async () => {
      try {
        setReviews(storedReviews.filter(r => r.id !== review.id));
        await deleteReview(review.id);
      } catch {
        setReviews(storedReviews);
        alert('Failed to delete review');
      }
    })
  };

  useEffect(() => {
    setReviews(reviews);
  }, [reviews, setReviews]);

  return (
      <div className="flex flex-col relative md:h-[70vh]">
        <div className="md:overflow-y-auto w-full h-full scrollbar-hidden">
          {storedReviews.map((review, i) => (
              <Fragment key={i}>
                {
                  isMobile ?
                      <SmallReview key={i + 'small'} review={review} onEdit={handleEdit} onDelete={handleDelete}/> :
                      <Review key={i + 'large'} review={review} onEdit={handleEdit} onDelete={handleDelete}/>
                }
              </Fragment>
          ))}
        </div>
      </div>
  );
};
