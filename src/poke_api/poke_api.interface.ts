export interface PokeApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PokeApiQueryParam {
  offset?: number;
  limit?: number;
}
