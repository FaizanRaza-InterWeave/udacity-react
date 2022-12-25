var filterArray = require("./filterArray");

describe("Filter Array", () => {
  it("should return null if null is passed in", () => {
    expect(filterArray(null)).toEqual(null);
  });
  it("correct length array is returned", () => {
    expect(filterArray([1, 2, 3, 4]).length).toEqual(4);
  });
  it("filters out numbers correctly", () => {
    expect(filterArray([50, 75, 100, 125]).length).not.toContain(125);
  });
});
