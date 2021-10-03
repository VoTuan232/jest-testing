/**
 * with only: run one test in one file
 * 
 */

describe("Setup and Teardonw - General Advice", () => {
  test.only("this will be the only test that runs", () => {
    expect(true).toBe(true);
  });

  test("this test will not run", () => {
    expect("A").toBe("B");
  });
});
