async function fetchDefaultStockNews() {
  try{
    const response = await fetch(`https://newsapi.org/v2/everything?q=financial+markets&sortBy=publishedAt:desc&apiKey=b4efdbfd3cb84d29975565bfb355a60b`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
      
    const data = await response.json();
    if (!data || !data.articles) {
      throw new Error("Error: No data received from News API");
    }
    const articles = data.articles;
    const topFiveArticles = articles.slice(0, 5);
    return topFiveArticles.map(article => ({
      title: article.title,
      url: article.url,
      description: article.description,
      imageUrl: article.urlToImage
    }));
      
          
  }
  catch(error){
    throw new Error(error);
  }
}

export default fetchDefaultStockNews;