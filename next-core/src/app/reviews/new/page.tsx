import {ReviewForm} from "@/components/ReviewForm";
import {MealReviewForm} from "@/components/MealReviewForm";
import {Title} from "@/components/ui/Container";
import {Sora} from "next/font/google";

const sora = Sora({
  weight: '400',
  subsets: ['latin'],
})

const NewReview = () => {
  return (
      <>
        <Title className={sora.className}>Create a Meal Review</Title>
        {/*<ReviewForm/>*/}
        <MealReviewForm/>
      </>
  );
};

export default NewReview;
