export function assertUnreachable(value: never, msg: string): never {
  throw new UnreachableCodeError(msg, value);
}
class UnreachableCodeError extends Error {
  unexpectedValue: unknown;

  constructor(message: string, value: unknown) {
    super(message);
    this.unexpectedValue = value;
  }
}
