import { stringInfo } from "../types/core";
import { LoggerServiceCallback } from "./types/core";

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, cb: LoggerServiceCallback) {
  if (!arg || arg.trim().length === 0) {
    cb("Invalid argument!");
    return;
  }
  cb("Called function with argument: " + arg);
  return arg.toUpperCase();
}
