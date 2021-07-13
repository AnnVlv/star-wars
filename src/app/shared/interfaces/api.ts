export interface Api<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
