import type { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Container.module.css";
import { extendsClassName } from "@/utils/client";

interface IProps
  extends PropsWithChildren,
    HtmlHTMLAttributes<HTMLDivElement> {}

export function Container(props: IProps) {
  return (
    <div
      {...props}
      className={extendsClassName(styles.container, props.className)}
    >
      {props.children}
    </div>
  );
}

export const containerStyle = styles.container;
