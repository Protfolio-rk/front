import shared from "./css/shared.module.css";
import style from "./css/loading.module.css";
import { extendsClassName } from "@/utils/client";

export function Loading() {
  return (
    <li className={shared.item}>
      <div className={extendsClassName(shared.background, style.loading)}>
      </div>
    </li>
  );
}
