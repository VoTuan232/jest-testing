/**
 * Setup each test
 */

describe("Setup Teardown - Repeating setup many tests", () => {
  beforeEach(() => {
    // initializeCityDatabase();
    // return initializeCityDatabase(); // if initializeCityDatabase is a promise
    console.log("come before each");
  });

  afterEach(() => {
    console.log("come after each");
    // clearCityDatabase();
  });

  test("city database has Vienna", () => {
    expect(true).toBe(true);
    // expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(true).toBe(true);
    // expect(isCity("San Juan")).toBeTruthy();
  });
});
