var express = require('express');
var router = express.Router();
const format = require('date-format-parse').format;
const CryptoCompareApi = require('../interests/clients/cryptocompare/api')
const inputValidator = require('../interests/validators/inputValidators')
const currencyDiff = require('../interests/calculations/currencyDiff')
const inputDateFormat = require('../interests/consts/dateConsts').inputDateFormat

/*
Params: query param - fromDate - from which date the comparison will be made (price will be from the end of the day
        currencies - list of currencies to compare
Returns interests value difference in percentage between given date and now  */
router.get('/difference/', async function (req, res, next) {
    // TODO: validate input  - valid date? what happen if date is before coin started? currencies exist?
    const fromDate = req.query.fromdate
    const currencies = req.query.currencies.split(",")

    const cryptoCompareApi = new CryptoCompareApi()
    const fromDateCurrencies = await cryptoCompareApi.listCurrenciesValuesByDate(fromDate, currencies)
    const currentDateCurrencies = await cryptoCompareApi.listCurrenciesValuesByDate(format(Date.now(), inputDateFormat), currencies)

    const response = []
    for (let i = 0 ;i < fromDateCurrencies.length; i++){
        const fromCurrencyValue = fromDateCurrencies[i].value
        const currentCurrencyValue = currentDateCurrencies[i].value
        const currencyName = fromDateCurrencies[i].currency
        response.push({[currencyName]: currencyDiff(fromCurrencyValue, currentCurrencyValue).toString() + "%"})
    }
    res.send(response)
});


module.exports = router;
