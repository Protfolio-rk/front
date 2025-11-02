export type gqlResponse<S extends string, T> = {
  [slug in S]: T;
};
