module.exports = function (fromValue, toValue) {
    return Math.floor(((toValue - fromValue) / fromValue) * 100)
}