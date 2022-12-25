var isUtensilAvailable = require("./isUtensilAvailable");

describe("isUtensilAvailable", () => {
  it("should resolve true if a Utensil is provided", async () => {
    const result = await isUtensilAvailable("fork");
    expect(result).toEqual(true);
  }, 10000);

  it("should resolve false if a Utensil is not provided", async () => {
    await expect(isUtensilAvailable("Not A Utensil")).rejects.toEqual(
      "No utensils found."
    );
  });
});
