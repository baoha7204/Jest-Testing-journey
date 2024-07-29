import { PasswordErrors } from "../constants/core";

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}
