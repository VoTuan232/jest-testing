/**
 * Setup one at : begin file
 * Begin: bắt đầu test
 * AfterAll: kết thúc tất cả test 
 */

describe("Setup and Teardonw - One Time Setup", () => {
  beforeAll(() => {
    // initializeCityDatabase();
    // return initializeCityDatabase(); // if initializeCityDatabase is a promise
    console.log("come before each");
  });

  afterAll(() => {
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
