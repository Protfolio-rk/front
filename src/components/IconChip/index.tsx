import type { Technology } from "@/types";
import type { FunctionComponent } from "react";
import {
  AndroidLogo,
  AngularLogo,
  AwsIcon,
  AzureIcon,
  CSharpLogo,
  DockerLogo,
  ExpressJsLogo,
  FlutterIcon,
  GCPIcon,
  GolangLogo,
  GraphQLIcon,
  JavaLogo,
  JavaScriptLogo,
  KafkaIcon,
  KotlinIcon,
  LinuxTux,
  LuaLogo,
  MongoDbLogo,
  MySqlLogo,
  NextJsLogo,
  NgiNxLogo,
  NodeJsLogo,
  OracleLogo,
  PythonIcon,
  ReactLogo,
  ReduxLogo,
  SpringLogo,
  SqlServerLogo,
  SvelteIcon,
  TypeScriptLogo,
  type classNameProp,
} from "../svg";
import styles from "./iconchip.module.css";

interface iconProps {
  name: Technology;
}

type def = {
  [key in Technology]: {
    displayName: string;
    Icon?: FunctionComponent<classNameProp>;
    color: string;
  };
};

const ChipDef: def = {
  gin_gonic: { displayName: "Gin-gonic", color: "#ba68c8" },
  fiber: { displayName: "Fiber", color: "#4db6ac" },
  JWT: { displayName: "JWT", color: "#ffee58" },
  nifi: { displayName: "Nifi", color: "#00bcd4" },
  elasticsearch: { displayName: "ElasticSearch", color: "#ff9800" },
  c_sharp: { displayName: "C#", color: "#795548", Icon: CSharpLogo },
  docker: { displayName: "Docker", color: "#ff6f61", Icon: DockerLogo },
  java: { displayName: "Java", color: "#ffcc29", Icon: JavaLogo },
  go: { displayName: "Go", color: "#64ffda", Icon: GolangLogo },
  lua: { displayName: "Lua", color: "#e57373", Icon: LuaLogo },
  nodejs: { displayName: "Node.js", color: "#81c784", Icon: NodeJsLogo },
  oraclesql: { displayName: "Oracle   SQL", color: "#9575cd", Icon: OracleLogo },
  mysql: { displayName: "MySQL", color: "#29b6f6", Icon: MySqlLogo },
  React: { displayName: "React", color: "#66bb6a", Icon: ReactLogo },
  angular: { displayName: "Angular", color: "#e53935", Icon: AngularLogo },
  linux: { displayName: "Linux", color: "#a5d6a7", Icon: LinuxTux },
  nextjs: { displayName: "Next.js", color: "#ff8a65", Icon: NextJsLogo },
  redux: { displayName: "Redux", color: "#42a5f5", Icon: ReduxLogo },
  nginx: { displayName: "Nginx", color: "#26a69a", Icon: NgiNxLogo },
  android: { displayName: "Android", color: "#a1887f", Icon: AndroidLogo },
  mongo: { displayName: "MongoDb", color: "#81c784", Icon: MongoDbLogo },
  aws: { displayName: "AWS", color: "#ff5722", Icon: AwsIcon },
  kotlin: { displayName: "Kotlin", color: "#7b1fa2", Icon: KotlinIcon },
  kafka: { displayName: "Kafka", color: "#f44336", Icon: KafkaIcon },
  gcp: { displayName: "Google Cloud", color: "#3f51b5", Icon: GCPIcon },
  graphql: { displayName: "GraphQL", color: "#9c27b0", Icon: GraphQLIcon },
  azure: { displayName: "Azure", color: "#2196f3", Icon: AzureIcon },
  python: { displayName: "Python", color: "#4caf50", Icon: PythonIcon },
  flutter: { displayName: "Flutter", color: "#03a9f4", Icon: FlutterIcon },
  svelte: { displayName: "Svelte", color: "#ff7043", Icon: SvelteIcon },
  javascript: {
    displayName: "JavaScript",
    color: "#ffd54f",
    Icon: JavaScriptLogo,
  },
  typescript: {
    displayName: "TypeScript",
    color: "#4fc3f7",
    Icon: TypeScriptLogo,
  },
  sql_server: {
    displayName: "SQL Server",
    color: "#b0bec5",
    Icon: SqlServerLogo,
  },
  express_js: {
    displayName: "Express.js",
    color: "#ffee58",
    Icon: ExpressJsLogo,
  },
  spring_boot: {
    displayName: "Spring Boot",
    color: "#8d6e63",
    Icon: SpringLogo,
  },
};

export function IconChip({ name }: iconProps) {
  const Component = ChipDef[name]?.Icon;

  return (
    <div
      className={styles.chip_container}
      style={{
        ["--chip-color" as string]: ChipDef[name]?.color,
      }}
    >
      {Component ? <Component className={name === "React" ? styles.react : undefined} /> : ""}
      <span className={styles.chip}>{ChipDef[name]?.displayName}</span>
    </div>
  );
}
