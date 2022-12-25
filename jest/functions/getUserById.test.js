var getUserById = require("./getUserById");

describe("getUserById", () => {
  it("Returns a full object when a valid ID is passed in", async () => {
    // GIVEN
    const id = 4;
    // WHEN\
    const result = await getUserById(id);

    // THEN
    expect(result).toEqual({
      id: 4,
      firstName: "Iris",
      lastName: "Leblanc",
    });

    // Test Validation
    expect(result).not.toEqual({
      id: 4,
      firstName: "IrisTV",
      lastName: "LeblancTV",
    });
  });

  it("throws an error when an invalid ID is passed in", async () => {
    // GIVEN
    const id = 6;

    // WHEN
    expect.assertions(1);
    try {
      await getUserById(id);

      // THEN
    } catch (e) {
      expect(e).toMatch(`User with ID ${id} not found.`);
    }
  });
});
