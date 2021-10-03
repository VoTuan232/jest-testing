describe('Async Code - Promies', () => {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('peanut butter')
            }, 3000);
        })
    }
    const fetchDataFail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('peanut butter error')
            }, 3000);
        })
    }

    test('the data is peanut butter', () => {
        return fetchData().then(data => {
          expect(data).toBe('peanut butter');
        });
    });

    test('the fetch fails with an error', () => {
        expect.assertions(1); // Nếu ko có, error sẽ ko xuất hiện 
        return fetchDataFail().catch(e => {
            expect(e).toMatch('peanut butter error')
        });
    });
});
