const axios = require('axios');
require('dotenv').config();

const coinlayer_API = "http://api.coinlayer.com/api/live"
const coinlayer_ACCESS_KEY = process.env.coinlayer_ACCESS_KEY;

async function get_rate(){
    try {
        const config = {
            method: 'get',
            url: coinlayer_API,
            params: { access_key: coinlayer_ACCESS_KEY, symbols:"BTC" }
            
        }

        let res = await axios(config)
        let rate = res.data.rates.BTC
        return rate
    } catch (error) {
        console.error(error)
    }

}

exports.get_rate = get_rate