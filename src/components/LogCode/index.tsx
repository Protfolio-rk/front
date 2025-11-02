import { useTextChange } from "@/hooks";
import styles from "./LogCode.module.css";

interface Props {
  text: string[];
}
export function LogCode(props: Props) {
  const text = useTextChange(props.text);

  return (
    <code className={styles.txt}>
      <span className={styles.obj}>console</span>
      <span className={styles.method}>.log</span>(
      <span className={styles.str}>
        <span className={styles.quote}>{"\""}</span>
        {`Hi I'm ${text}`}
        <span className={styles.quote}>{"\""}</span>
        </span>);
    </code>
  );
}
