async function fetchDefaultStockData() {
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=HKD56XIVVW844ECS`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    if (!data) {
      throw new Error("Error: No data received from Alpha Vantage");
    }
    const processedData = {
      symbol:data["Global Quote"]["01. symbol"],
      open: data["Global Quote"]["02. open"],
      close: data["Global Quote"]["05. price"],
      change: data["Global Quote"]["08. change percent"]
    };
    return processedData;
        
  }
  catch(error) {
    throw new Error(error);
  }
}

export default fetchDefaultStockData;