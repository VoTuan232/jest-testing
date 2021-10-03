function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 3000);
}

describe('Async Code - Callback', () => {
    test('the data is peanut butter', done => {
        function callback(data) {
          try {
            console.log("[data]", data);
            expect(data).toBe('peanut butter');
            done();
          } catch (error) {
            done(error);
          }
        }
      
        fetchData(callback);
      });
})