import {
  DockerLogo,
  AndroidLogo,
  AngularLogo,
  GitLogo,
  GolangLogo,
  JavaLogo,
  JavaScriptLogo,
  MariaDBLogo,
  MongoDbLogo,
  MySqlLogo,
  NextJsLogo,
  ReactLogo,
  ReduxLogo,
  SpringLogo,
  TypeScriptLogo,
} from "../svg";
import styles from "./Decoration.module.css";

export function Decoration() {
  return (
    <section className={styles.decoration}>
      <ReactLogo />
      <TypeScriptLogo />
      <SpringLogo />
      <JavaLogo />
      <AngularLogo />
      <DockerLogo />
      <AndroidLogo />
      <MySqlLogo />
      <GolangLogo />
      <JavaScriptLogo />
      <MariaDBLogo />
      <NextJsLogo />
      <ReduxLogo />
      <GitLogo />
      <MongoDbLogo />
    </section>
  );
}
