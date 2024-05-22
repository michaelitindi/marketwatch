async function fetchDefaultStockData() {
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=HKD56XIVVW844ECS`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    if (!data || !data["top_gainers"] || !data["top_losers"] || !data["most_actively_traded"]) {
      throw new Error("Error: No data received from Alpha Vantage");
    }
    const processedData = {
      top_gainers: data["top_gainers"].map(stock => ({
        symbol: stock["ticker"],
        change_amount: stock["change_amount"],
        price: stock["price"], 
        change_percentage: stock["change_percentage"], 
        volume: stock["volume"],
      })),
      top_losers: data["top_losers"].map(stock => ({
        symbol: stock["ticker"],
        change_amount: stock["change_amount"],
        price: stock["price"], 
        change_percentage: stock["change_percentage"], 
        volume: stock["volume"],
      })),
      most_actively_traded: data["most_actively_traded"].map(stock => ({
        symbol: stock["ticker"],
        change_amount: stock["change_amount"],
        price: stock["price"], 
        change_percentage: stock["change_percentage"], 
        volume: stock["volume"],
      }))
    };
    return processedData;
        
  }
  catch(error) {
    throw new Error(error);
  }
}

export default fetchDefaultStockData;