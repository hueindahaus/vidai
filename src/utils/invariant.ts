export function invariant(condition: unknown, message: string | (() => string)): asserts condition {
  if (condition)
    return

  throw new Error(`Invariant failed: ${typeof message === "function" ? message() : message}`);
}
