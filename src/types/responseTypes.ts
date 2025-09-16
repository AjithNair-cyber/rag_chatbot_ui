export type Source = {
  title: string;
  url: string;
};

export type QueryResult = {
  answer: string;
  sources: Source[];
};
