import type { TextNode, id, Image } from ".";
import type { Technology } from "./Technology";

export interface ProyectBase extends id {
  name: string;
  stack: Technology[];
}

export interface Proyect extends ProyectBase {
  description: TextNode[];
  ScreenShots: Image[];
  Repository: string;
  keywords: {
    name: string;
  }[];
  resume: string;
}
