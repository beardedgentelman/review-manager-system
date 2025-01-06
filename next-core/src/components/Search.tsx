"use client";

import {useDebouncedCallback} from '@/hooks/useDebouncedCallback';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import {ReviewFilters} from "@/lib/types";

const Search = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters: ReviewFilters = {
    title: searchParams.get('title') || '',
    author: searchParams.get('author') || '',
    rating: searchParams.get('rating') || undefined,
  };

  const debouncedFilterChange = useDebouncedCallback((field: string, value: string | number | null) => {
    const url = createPageURL({...filters, [field]: value});
    router.push(url);
  });

  const createPageURL = useCallback((filters: ReviewFilters) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(filters).forEach(([key, value]) => {
      if (!value) params.delete(key);
      else params.set(key, value.toString());
    });

    params.delete('page');

    return `${pathname}?${params.toString()}`;
  }, [filters, pathname, searchParams]);

  return (
      <div className="flex flex-col md:flex-row items-center flex-nowrap gap-4 mb-4">
        <input
            type="text"
            defaultValue={filters.title}
            placeholder="Search by title"
            onChange={(e) => debouncedFilterChange('title', e.target.value)}
            className="border p-2 md:w-2/4 w-fit"
        />
        <input
            type="text"
            placeholder="Filter by author"
            defaultValue={filters.author}
            onChange={(e) => debouncedFilterChange('author', e.target.value)}
            className="border p-2 md:w-1/4 w-fit"
        />
        <select
            defaultValue={filters.rating}
            title="Filter by rating"
            name="Filter by rating"
            onChange={(e) =>
                debouncedFilterChange('rating', e.target.value ? Number(e.target.value) : null)
            }
            className="border p-2 md:w-1/4 w-fit"
        >
          <option value={''}>All Ratings</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>
  );
};

export default Search;
