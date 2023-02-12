import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    return await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
}

async function getMarketPriceHistory() {
    const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    return res.data.values
}

async function getAvgBlockSize() {
    const res = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
    return res.data.values
 }