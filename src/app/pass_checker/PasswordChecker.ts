import { NUMBER_REGEX, PasswordErrors } from "./constants/core";
import { CheckResult } from "./types/core";

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    let reasons: PasswordErrors[] = [];
    this.checkForLength(password, reasons);
    this.checkForUppercase(password, reasons);
    this.checkForLowercase(password, reasons);
    return {
      valid: reasons.length === 0,
      reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const basicCheck = this.checkPassword(password);
    this.checkForNumber(password, basicCheck.reasons);
    return {
      valid: basicCheck.valid && basicCheck.reasons.length === 0,
      reasons: basicCheck.reasons,
    };
  }

  private checkForNumber(password: string, reasons: PasswordErrors[]) {
    if (!NUMBER_REGEX.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private checkForLength(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForUppercase(password: string, reasons: PasswordErrors[]) {
    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPERCASE);
    }
  }

  private checkForLowercase(password: string, reasons: PasswordErrors[]) {
    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWERCASE);
    }
  }
}
