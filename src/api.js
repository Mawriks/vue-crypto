const API_KEY = '0f8f1b3a5c96e0406036df01fa54b9aa4a4135439b3852aca723fd09806eb8d5';

export const loadTicker = (tickerName) => fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
).then(data => data.json());



