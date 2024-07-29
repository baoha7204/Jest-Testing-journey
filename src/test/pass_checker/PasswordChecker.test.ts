import { PasswordErrors } from "../../app/pass_checker/constants/core";
import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Complex password is valid", () => {
    const actual = sut.checkPassword("1234eFgH");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  it("Password with less than 8 characters is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with no uppercase letter is invalid", () => {
    const actual = sut.checkPassword("1234efgh");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPERCASE);
  });

  it("Password with no lowercase letter is invalid", () => {
    const actual = sut.checkPassword("12345EFGH");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWERCASE);
  });

  it("Admin password with no number is invalid", () => {
    const actual = sut.checkAdminPassword("abcdeFGH");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
  });
  it("Admin password with basic valid and number is valid", () => {
    const actual = sut.checkAdminPassword("1234eFGH");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });
});
