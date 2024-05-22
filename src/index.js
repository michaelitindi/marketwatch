import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import fetchStockData from './stockdata';
import fetchStockNews from './stocknews';
import fetchDefaultStockData from './defaultstockdata';
import fetchDefaultStockNews from './defaultstocknews';

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const defaultStockNews = document.getElementById('default-stock-news');
const defaultStockData = document.getElementById('default-stock-data');
const stockNews = document.getElementById('stock-news');
const stockData = document.getElementById('stock-data');

// Fetch default stock data and news on page load
window.onload = async () => {
  const defaultNews = await fetchDefaultStockNews();
  const defaultData = await fetchDefaultStockData();

  // Update UI with default news and data (replace with actual data population logic)
  defaultStockNews.innerHTML = defaultStockNews.innerHTML =  `
  <h3>Default Stock News</h3>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    ${defaultNews.map(article => `
      <div class="col">
      <a href="${article.url}" target="_blank" class="text-decoration-none">
        <div class="card">
          <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
          </div>
        </div>
        </a>
      </div>
    `).join('')}
  </div>
`;
   defaultStockData.innerHTML = `<h3>Top Gainers</h3>
   <ul>${defaultData.top_gainers.map(stock => `<li>${stock.symbol}: ${stock.change_amount} (${stock.change_percentage}%)</li>`).join('')}</ul>
  <hr>
  <h3>Top Losers</h3>
  <ul>${defaultData.top_losers.map(stock => `<li>${stock.symbol}: ${stock.change_amount} (${stock.change_percentage}%)</li>`).join('')}</ul>
  <hr>
   <h3>Most Actively Traded</h3>
  <ul>${defaultData.most_actively_traded.map(stock => `<li>${stock.symbol}: ${stock.change_amount} (${stock.change_percentage}%)</li>`).join('')}</ul>`;
};

// Search button click handler
searchButton.addEventListener('click', async () => {
  const symbol = searchBar.value.trim();

  if (!symbol) {
    alert('Please enter a stock symbol');
    return;
  }

  // Fetch specific stock data and news
  const news = await fetchStockNews(symbol);
  const data = await fetchStockData(symbol);

  // Update UI with specific stock news and data (replace with actual data population logic)
  stockNews.innerHTML = `<h3>Default Stock News</h3>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    ${news.map(article => `
      <div class="col">
      <a href="${article.url}" target="_blank" class="text-decoration-none">
        <div class="card">
          <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}" >
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
          </div>
        </div>
        </a>
      </div>
    `).join('')}
  </div>`;
  stockData.innerHTML = ` <h3>Stock Data for ${symbol}</h3>
  <ul>
   <li>Open: ${data.open}</li>
  <li>High: ${data.high}</li>
  <li>Low: ${data.low}</li>
  <li>Close: ${data.close}</li>
  <li>Volume: ${data.volume}</li>
  </ul>`; 
  // Clear default stock sections and make specific sections visible
  defaultStockNews.innerHTML = '';
  defaultStockData.innerHTML = '';
  stockNews.classList.remove('d-none');
  stockData.classList.remove('d-none');
});