export class EnviromentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnviromentError";
  }
}

export class UnmacheableEmail extends Error {
  constructor(public email: string) {
    super("Cant mach that email");
    this.name = "UnmacheableEmail";
  }
}

export const emailExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
