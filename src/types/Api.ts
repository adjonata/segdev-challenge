/**
 * API Pagination
 */
export interface ApiPagination<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T;
}

/**
 * Filters
 */
export interface DefaultFilter {
  page?: number;
}

export interface CharactersFilters extends DefaultFilter {
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string;
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
}

export interface LocationsFilters extends DefaultFilter {
  name?: string;
  type?: string;
  dimension?: string;
}

export interface EpisodesFilters extends DefaultFilter {
  name?: string;
  episode?: string;
}
