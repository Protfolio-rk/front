export function extendsClassName(...args: (string | undefined)[]): string {
  let res = "";

  for (const i of args) {
    if (typeof i === "string") {
      res += " " + i;
    }
  }

  return res;
}
