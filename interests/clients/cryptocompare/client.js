const {response} = require("express");
const axios = require('axios').default;


// TODO: should be env variable
const apiKey = "1f440a0ad5ed426c98ab6cccb6de62e3cc4dba5034c4d92ffad69c411a4f3672"

module.exports = class CryptoCompareClient {
    constructor() {
        this.apiKey = apiKey
        this.baseUrl = "https://min-api.cryptocompare.com/data/"
    }

    doGetRequest = async function (route, params)  {
        let resp = ""
        try {
             resp = await axios.get(`${this.baseUrl}${route}?${params}&apikey=${this.apiKey}`)
        } catch (err) {
            console.error(err)
        }
        return resp.data
    }
}