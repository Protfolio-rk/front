import type { CSSProperties, HtmlHTMLAttributes } from "react";
import { extendsClassName } from "@/utils/client";
import { Direction } from "../";
import styles from "./Button.module.css";

interface IProps {
  children?: string;
  direction?: Direction;
  actived?: boolean;
  href?: string;
  attributes?: HtmlHTMLAttributes<HTMLElement>;
}

export function Button(props: IProps) {
  const fn = (): CSSProperties => {
    switch (props.direction) {
      case Direction.LEFT:
        return {
          borderWidth: "0px 0px 2px 2px",
          borderRadius: "10px 0px 20px 5px",
        };
      case Direction.RIGHT:
        return {
          borderWidth: "0px 2px 2px 0px",
          borderRadius: "0px 10px 5px 20px",
        };
      default:
        return {
          borderBottomWidth: "2px",
          borderRadius: "5px 5px 15px 15px",
        };
    }
  };
  const attributes = {
    ...props.attributes,
    style: { ...fn(), ...props.attributes?.style },
    className: extendsClassName(
      styles.btn,
      props.actived ? styles.actived : undefined,
      props.attributes?.className
    ),
    children: <span>{props.children}</span>,
  };

  return props.href ?
    <a {...attributes} href={props.href}/> :
    <button {...attributes} />;
}
