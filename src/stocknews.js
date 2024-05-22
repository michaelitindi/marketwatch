async function fetchStockNews(symbol) {
  try{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${symbol}&sortBy=relevancy&apiKey=b4efdbfd3cb84d29975565bfb355a60b`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    const data = await response.json();
    if (!data) {
      throw new Error("Error: No data received from News API");
    }
    const articles = data.articles;
    const topFiveArticles = articles.slice(0, 5);
    return topFiveArticles.map(article => ({
      title: article.title,
      url: article.url,
      description: article.description
    }));
    
        
  }
  catch(error){
    throw new Error(error);
  }
}

export default fetchStockNews;