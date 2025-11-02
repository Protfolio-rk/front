import type { TextNode, id } from ".";

export type EducationType = "certificate" | "degree" | "course";

export interface EducationBase extends id {
  title: string;
  type: EducationType;
  from: string;
}

export interface Education extends EducationBase {
  description: TextNode[];
  start_date: string;
  end_date: string;
  resume: string;
  keywords: {
    name: string;
  }[];
}
