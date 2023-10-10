import strictEquals from "./strictEquals/stricEquals";

describe("given a strictEquals function", () => {
  describe("when it receive 1 and 1", () => {
    test("then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const espectedIsValue = true;

      const isValue = strictEquals(valueA, valueB);

      expect(isValue).toBe(espectedIsValue);
    });
  });
});
