const isProduction = process.env.NODE_ENV === "production";
const prefix = "Invariant failed";

type InvariantMessage = string | (() => string) | Error;

export function invariant(
  condition: any,
  message?: InvariantMessage,
): asserts condition {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  let provided: string | undefined;

  if (typeof message === "function") {
    provided = message();
  } else if (message instanceof Error) {
    provided = message.message;
  } else {
    provided = message;
  }

  const value: string = provided ? `${prefix}: ${provided}` : prefix;
  throw new Error(value);
}
