"use client";

import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import {memo} from "react";

const Pagination = ({totalPages}: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") as string) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getDisplayedPages = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 1); // Ensure the range starts at 1
    const end = Math.min(totalPages, currentPage + 1); // Ensure the range doesn't exceed totalPages

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const displayedPages = getDisplayedPages();
  const isNotBeforeLastPage = currentPage < totalPages - 1;

  return (
      <div className="flex text-nowrap flex-wrap justify-center items-baseline gap-1 m-2">
        <Link
            hidden={currentPage <= 1}
            href={createPageURL(currentPage - 1)}
            className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Previous
        </Link>
        <div className="flex items-baseline space-x-1">
          {displayedPages.map((page) => (
              <Link
                  key={page}
                  aria-disabled={page === currentPage}
                  tabIndex={page === currentPage ? -1 : undefined}
                  href={createPageURL(page)}
                  className={`px-2 py-1 rounded ${
                      page === currentPage
                          ? "bg-blue-500 text-white pointer-events-none"
                          : "hover:bg-gray-200"
                  }`}
              >
                {page}
              </Link>
          ))}
          {isNotBeforeLastPage && <span>...</span>}
          {isNotBeforeLastPage && (
              <Link
                  href={createPageURL(totalPages)}
                  className="px-2 py-1 hover:bg-gray-200 rounded"
              >
                of {totalPages}
              </Link>
          )}
        </div>
        <Link
            hidden={currentPage >= totalPages}
            href={createPageURL(currentPage + 1)}
            className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Next
        </Link>
      </div>
  );
};

export default memo(Pagination);
