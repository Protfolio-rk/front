export interface id {id: string}

export interface ListResponse<T> {
  docs: T[];
  page: number;
  totalPages: number;
  prevPage: number | null;
}

export * from "./image";
export * from "./Message";
export * from "./Education";
export * from "./Proyects";
export * from "./RichText";
export * from "./Technology";
export * from "./Experience";
