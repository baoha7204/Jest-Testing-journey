import {
  calculateComplexity,
  OtherStringUtils,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  it("should return correct complexity", () => {
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

  describe("ToUpperCase - call callback for", () => {
    const cb = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("invalid argument", () => {
      const arg = "";
      const actual = toUpperCaseWithCb(arg, cb);
      expect(actual).toBeUndefined();
      expect(cb).toHaveBeenCalledWith("Invalid argument!");
      expect(cb).toBeCalledTimes(1);
    });

    it("valid argument", () => {
      const arg = "aBc";
      const actual = toUpperCaseWithCb(arg, cb);
      expect(actual).toBe("ABC");
      expect(cb).toHaveBeenCalledWith(`Called function with argument: ${arg}`);
      expect(cb).toBeCalledTimes(1);
    });
  });

  describe("OtherStringUtils test suite", () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    it("should log string", () => {
      const spy = jest.spyOn(console, "log");
      const arg = "test";
      sut.logString(arg);
      expect(spy).toHaveBeenCalledWith(arg);
    });

    it("should execute external service", () => {
      const arg = "test";
      jest.spyOn(sut, "executeExternalService").mockImplementation(() => {
        console.log("Executing: " + arg);
      });
      sut.executeExternalService(arg);
    });

    it("should convert string to uppercase", () => {
      const spy = jest.spyOn(sut, "toUpperCase");
      const arg = "abc";
      sut.toUpperCase(arg);
      expect(spy).toHaveBeenCalledWith(arg);
    });
  });
});
