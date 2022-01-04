const parse = require('date-format-parse').parse;
const inputDateFormat = require('../../consts/dateConsts').inputDateFormat
const timestampMillisToSec = require('../../calculations/timeCalculations').timestampMillisToSeconds
const CryptoCompareClient = require('./client')

module.exports = class CryptoCompareApi{
    constructor() {
        this.client = new CryptoCompareClient()
        this.baseCurrency = "USD"
        this.historicalPath = "pricehistorical"
    }

    async listCurrenciesValuesByDate(date, currencies){
        // TODO - Bulk?
        const dateAsTimestamp = timestampMillisToSec(parse(date, inputDateFormat).getTime())
        const promises = []
        for (const currency of currencies){
            promises.push(this.client.doGetRequest(this.historicalPath, `fsym=${currency}&tsyms=${this.baseCurrency}&ts=${dateAsTimestamp}`))
        }
        const responses = await Promise.all(promises)
        const results = [];
        for (let i = 0 ;i < responses.length; i++){
            const currency = currencies[i]
            results.push({currency: currency, value: responses[i][currency][this.baseCurrency]})
        }
        return results
    }

}