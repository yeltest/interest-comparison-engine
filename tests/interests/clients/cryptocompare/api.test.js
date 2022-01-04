const CryptoCompareApi = require('../../../../interests/clients/cryptocompare/api')
const CryptoCompareClient = require('../../../../interests/clients/cryptocompare/client')
const mockClient = require('')
// jest.mock('../../../../interests/clients/cryptocompare/client')

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    CryptoCompareClient.mockClear();
});

test('listCurrenciesValuesByDate should return currency and value for currencies by date ', () => {
    const date = "03/01/2022"
    const currencies = ["BTC"]

    // CryptoCompareClient.doGetRequest.mockResolvedValue({"BTC": 1})

    // expect(CryptoCompareClient).toReturn({"BTC": 1})
    // expect(api.listCurrenciesValuesByDate()).toBe([{"currency": "BTC", "value" :1}]);
});


const api = new CryptoCompareApi()