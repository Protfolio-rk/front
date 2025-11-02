import style from "./List.module.css";
import type { FunctionComponent, HtmlHTMLAttributes } from "react";
import { extendsClassName } from "@/utils/client";
import type { ListResponse, id } from "@/types";

interface IProps<T> extends HtmlHTMLAttributes<HTMLUListElement> {
  // * apply if is nesesary an infinyte scroll
  getfn?: (n?: number) => Promise<ListResponse<T>>;
  Component: FunctionComponent<T>;
  initialData: ListResponse<T>;
}

export function List<T extends id>({
  Component,
  initialData,
  ...props
}: IProps<T>) {
  return (
    <section className={style.list_cont}>
      <ul {...props} className={extendsClassName(style.list, props.className)}>
        {initialData.docs.map((i) => <Component key={i.id} {...i}/>)}
      </ul>
    </section>
  );
}

export * from "./listSkeleton.astro";
