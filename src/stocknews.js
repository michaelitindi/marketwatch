async function fetchStockNews() {
  try{
    const response = await fetch('https://newsapi.org/v2/everything?q=IBM&sortBy=relevancy&apiKey=b4efdbfd3cb84d29975565bfb355a60b');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    const data = await response.json();
    return data;
        
  }
  catch(error){
    throw new Error(error);
  }
}

export default fetchStockNews;