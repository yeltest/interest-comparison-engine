// Import this named export into your test file:
export const mockCryptoCompareClient = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return {doGetRequest: {"BTC": 1}};
});

export default mock;