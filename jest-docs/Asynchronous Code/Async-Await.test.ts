describe("Async Code - Async Await", () => {
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("peanut butter");
      }, 3000);
    });
  };

  const fetchDataFail = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("peanut butter error");
      }, 3000);
    });
  };

  test("the data is peanut butter", async () => {
    const data = await fetchData();
    expect(data).toBe("peanut butter");
  });

  test("the fetch fails with an error", async () => {
    expect.assertions(1);
    try {
      await fetchDataFail();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
