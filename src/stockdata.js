
async function fetchStockData(symbol) {
  try{  
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=ZPFCJ0N0UQE09FS9`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    if (!data) {
      throw new Error("Error: No data received from Alpha Vantage");
    }
    const todaysData = data["Time Series (Daily)"][Object.keys(data["Time Series (Daily)"])[0]];
    const processedData = {
      symbol:symbol,
      open: todaysData["1. open"] || null,
      close: todaysData["4. close"] || null,
      change: (todaysData["4. close"]||0) - (todaysData["1. open"]||0),
    };
    return processedData;
    
  }
  catch(error) {
    throw new Error(error);
  }
}

export default fetchStockData;

