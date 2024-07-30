import { v4 } from "uuid";
import { stringInfo } from "../types/core";
import { LoggerServiceCallback } from "./types/core";

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4();
}

export function toUpperCaseWithCb(arg: string, cb: LoggerServiceCallback) {
  if (!arg || arg.trim().length === 0) {
    cb("Invalid argument!");
    return;
  }
  cb("Called function with argument: " + arg);
  return arg.toUpperCase();
}

export class OtherStringUtils {
  public executeExternalService(arg: string) {
    console.log("Executing external service with argument: " + arg);
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
