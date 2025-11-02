type MetaName =
  | "description"
  | "keywords"
  | "author"
  | "robots"
  | "og:title"
  | "og:description"
  | "og:image"
  | "og:url"
  | "og:type"
  | "twitter:card"
  | "twitter:title"
  | "twitter:description"
  | "twitter:image"
  | "twitter:url";

export type MetaTags = { [K in MetaName]?: string };
export interface StandardProps {
  MetaTags: MetaTags;
  title?: string;
}

export { default as Standard } from "./Standard.astro";
export { default as TowColums } from "./TowColums.astro";
