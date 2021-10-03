describe('Async Code - Resolve Reject', () => {
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
        return expect(fetchData()).resolves.toBe('peanut butter');
    });

    test('the fetch fails with an error', () => {
        expect(fetchDataFail()).rejects.toMatch('peanut butter error');
    });
})