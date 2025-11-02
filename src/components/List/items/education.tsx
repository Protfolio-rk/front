import type { EducationBase } from "@/types";
import shared from "./css/shared.module.css";
import style from "./css/education.module.css";

export function EducationItem(props: EducationBase) {
  return (
    <li className={shared.item}>
      <a
        href={"/education/" + props.id}
        className={shared.background}
      >
        <h2 className={shared.text}>{props.title}</h2>
        <div className={style.subtitle}>
          <h3 className={shared.text}>{props.from}</h3>
          <span className={style[props.type]}>
            {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
          </span>
        </div>
      </a>
    </li>
  );
}
