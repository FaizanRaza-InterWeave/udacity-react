var multiply = require("./multiply");

describe("Multiply", () => {
  it("will return the product of two numbers passed", () => {
    expect(multiply(2, 3)).toEqual(6);
  });
});
