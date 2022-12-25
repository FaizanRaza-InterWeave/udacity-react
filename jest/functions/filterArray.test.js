var filterArray = require("./filterArray");

describe("Filter Array", () => {
  it("should return null if null is passed in", () => {
    expect(filterArray(null)).toEqual(null);
  });
  it("will return numbers lower than 100", () => {
    expect(filterArray([1, 2, 3, 4]).length).toEqual(4);
    expect(filterArray([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    expect(filterArray([1, 2, 3, 4])).not.toStrictEqual([1, 2, 3, 5]);
  });
  it("filters out numbers correctly", () => {
    expect(filterArray([50, 75, 100, 125]).length).not.toContain(125);
  });
});
