export interface Review {
  id: number;
  title: string;
  content: string;
  rating: number;
  author: string;
}

export interface DashboardSearchParams {
  page?: string;
  title?: string;
  author?: string;
  rating?: string;
}

export type ReviewFilters = Omit<DashboardSearchParams, 'page'>;