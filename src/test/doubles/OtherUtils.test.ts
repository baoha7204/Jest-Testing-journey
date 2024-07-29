import { calculateComplexity } from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  it("Should return correct complexity", () => {
    const someInfo = {
      length: 7,
      extraInfo: {
        test: "test",
        test2: "test2",
      },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(14);
  });
});
