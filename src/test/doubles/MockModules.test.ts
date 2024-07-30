import {
  calculateComplexity,
  toLowerCaseWithId,
  toUpperCase,
} from "../../app/doubles/OtherUtils";

jest.mock("../../app/doubles/OtherUtils", () => ({
  ...jest.requireActual("../../app/doubles/OtherUtils"),
  calculateComplexity: jest.fn().mockReturnValue(10),
}));

jest.mock("uuid", () => ({
  v4: jest.fn().mockReturnValue("abc"),
}));

describe("Mock modules test suite", () => {
  it("calculateComplexity - should return mock value", () => {
    const actual = calculateComplexity({} as any);
    expect(actual).toBe(10);
  });

  it("toUpperCase - should return actual value", () => {
    const actual = toUpperCase("abc");
    expect(actual).toBe("ABC");
  });

  it("toLowerCaseWithId - should return actual value with mock id from uuid", () => {
    const actual = toLowerCaseWithId("123");
    expect(actual).toBe("123abc");
  });
});
