import type { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Background.module.css";

export function Background(props: PropsWithChildren & HTMLAttributes<HTMLElement>) {
  return (
    <>
      <div className={styles.background}>
        <main {...props}>{props.children}</main>
      </div>
      <div className={styles.squeres_cont}>
        <div className={styles.square_1} />
        <div className={styles.square_2} />
      </div>
    </>
  );
}
