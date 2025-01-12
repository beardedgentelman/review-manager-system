import Link from 'next/link';
import Search from "@/components/Search";
import {ReviewList} from "@/components/ReviewList";
import Pagination from "@/components/Pagination";
import {fetchReviews} from "@/lib/actions";
import {notFound} from "next/navigation";
import {DashboardSearchParams} from "@/lib/types";
import {Suspense} from "react";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import Await from "@/components/Await";
import {Button} from "@/components/ui/Button";

interface DashboardProps {
  searchParams: Promise<DashboardSearchParams>;
}

const Dashboard = async ({searchParams}: DashboardProps) => {
  const params = await searchParams;

  const reviewsPromise = fetchReviews(params);

  return (
      <div className="flex flex-col justify-between h-full m-2 md:w-1/2 max-md:w-full max-w-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Reviews Dashboard</h1>
          <Link href="/reviews/new">
            <Button>Add New Review</Button>
          </Link>
        </div>
        <Suspense fallback={<LoadingSkeleton count={10}/>}>
          <Await promise={reviewsPromise}>
            {({reviews, totalCount}) => {
              const page = Number(params.page);
              const totalPages = Math.ceil(totalCount / 10) || 1;
              const reviewsIsEmpty = reviews.length === 0;

              if (reviewsIsEmpty && page > totalPages) notFound();

              return (<>
                <Search/>
                {reviewsIsEmpty ?
                    <div className='m-auto'>Nothing :)</div> :
                    <>
                      <ReviewList reviews={reviews}/>
                      <Pagination totalPages={totalPages}/>
                    </>}
              </>)
            }}
          </Await>
        </Suspense>
      </div>
  );
};

export default Dashboard;
