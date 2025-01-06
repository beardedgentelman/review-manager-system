import {ReviewForm} from "@/components/ReviewForm";
import {fetchReview} from "@/lib/actions";
import {notFound} from "next/navigation";


interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({params}: PageProps) => {
  const {id} = await params;
  const data = await fetchReview(id);

  if (!data) notFound();

  return (
      <>
        <h1 className="text-2xl font-bold w-full text-center mb-6">Edit the Review</h1>

        <ReviewForm review={data}/>
      </>
  );
};

export default Page;
