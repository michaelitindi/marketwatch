
async function fetchStockData() {
  try{  
    const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=HKD56XIVVW844ECS');
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
    
  }
  catch(error) {
    throw new Error(error);
  }
}

export default fetchStockData;

