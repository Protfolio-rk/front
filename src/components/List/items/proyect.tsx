import type { ProyectBase } from "@/types";
import shared from "./css/shared.module.css";
import style from "./css/proyect.module.css";
import { IconChip } from "@/components";

export function ProyectItem(props: ProyectBase) {
  return (
    <li className={shared.item}>
      <a href={"/proyects/" + props.id} className={shared.background}>
        <h2 className={shared.text}>{props.name}</h2>
        <div className={style.stack}>
          {props.stack.map((stk, i) => (
            <IconChip name={stk} key={i} />
          ))}
        </div>
      </a>
    </li>
  );
}
