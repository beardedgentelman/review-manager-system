import {ReviewForm} from "@/components/ReviewForm";
import {fetchReview} from "@/lib/actions";
import {notFound} from "next/navigation";
import {MealReviewForm} from "@/components/MealReviewForm";
import {Title} from "@/components/ui/Container";
import {Sora} from "next/font/google";

interface PageProps {
  params: Promise<{ id: string }>;
}

const sora = Sora({
  weight: '400',
  subsets: ['latin'],
})

const Page = async ({params}: PageProps) => {
  const {id} = await params;
  const data = await fetchReview(id);

  if (!data) notFound();

  return (
      <>
        <Title className={sora.className}>Meal Review</Title>

        {/*<ReviewForm review={data}/>*/}
        <MealReviewForm review={data}/>
      </>
  );
};

export default Page;
