/**
 * ALway pass
 * Because fetchData2 complete before run callback
 */
function fetchData2(callback) {
  setTimeout(() => {
    callback("peanut butter1");
  }, 3000);
}

describe("Async Code - DontDoThis", () => {
  // Don't do this!
  test("the data is peanut butter", () => {
    function callback(data) {
      console.log("[data]", data);
      expect(data).toBe("peanut butter");
    }

    fetchData2(callback);
  });
});
