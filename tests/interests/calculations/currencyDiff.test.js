const currencyDiff = require('../../../interests/calculations/currencyDiff')

test('currencyDiff should be 100 when from is 1 and to is 2  ', () => {
    expect(currencyDiff(1, 2)).toBe(100);
});