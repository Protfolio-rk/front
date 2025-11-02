import type { id, Technology, TextNode } from ".";

export type JobType = "freelance" | "fulltime"
export interface ExperienceBase extends id {
  job: string;
  company: string;
  stack: Technology[];
  start_date: string;
  end_date?: string;
}

export interface Experience extends ExperienceBase {
  description: TextNode[];
  resume: string;
  keywords: { name: string }[]
  start_date: string;
  type: JobType;
}
