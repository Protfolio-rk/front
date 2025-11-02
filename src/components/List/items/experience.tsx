import type { ExperienceBase } from "@/types";
import shared from "./css/shared.module.css";
import style from "./css/experience.module.css";
import { IconChip } from "@/components";

export function ExperienceItem(props: ExperienceBase) {
  const time = calculateTimeDifference(new Date(props.start_date), props.end_date ? new Date(props.end_date) : new Date());

  return (
    <li className={shared.item}>
      <a href={"/experience/" + props.id} className={`${shared.background} ${style.container}`}>
        <div>
          <h2 className={shared.text}>{props.job}</h2>
          <p className={style.subtitle}>{props.company}</p>
        </div>
        <div>
          <span className={style.subtitle}>{time}</span>
          <div className={style.stack}>
            {props.stack.map((stk, i) => (
              <IconChip name={stk} key={i} />
            ))}
          </div>
        </div>
      </a>
    </li>
  );
}

function calculateTimeDifference(startDate: Date, endDate: Date): string {
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let res = years > 0 ? `${years} ${years === 1 ? "Year" : "Years"} ` : "";

  if (months > 0) {
    res += `${months} ${months === 1 ? "Month" : "Months"}`;
  }

  return res;
}
