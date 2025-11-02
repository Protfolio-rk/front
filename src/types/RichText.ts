export type NodeType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "ul"
  | "ol"
  | "li"
  | "link";

interface NodeStyle {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}
interface Link {
  linkType?: string;
  url?: string;
  newTab?: boolean;
}
interface Node extends Link, NodeStyle {
  text?: string;
  type?: NodeType;
}

export type TextNode = Node & {
  children?: TextNode[];
};
