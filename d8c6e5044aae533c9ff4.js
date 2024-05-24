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
  
  const defaultData = await fetchDefaultStockData();
  const defaultNews = await fetchDefaultStockNews();

  // Update UI with default news and data (replace with actual data population logic)
  
  defaultStockData.innerHTML = `
     <h3>Top Gainers</h3>
     <div class="row row-cols-1 row-cols-md-2 g-4">
       ${defaultData.top_gainers.map(stock => `
         <div class="col">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">${stock.symbol}</h5>
               <p class="card-text">Change: ${stock.change_amount} (${stock.change_percentage}%)</p>
             </div>
           </div>
         </div>
       `).join('')}
     </div>
     <hr>
     <h3>Top Losers</h3>
     <div class="row row-cols-1 row-cols-md-2 g-4">
       ${defaultData.top_losers.map(stock => `
         <div class="col">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">${stock.symbol}</h5>
               <p class="card-text">Change: ${stock.change_amount} (${stock.change_percentage}%)</p>
             </div>
           </div>
         </div>
       `).join('')}
     </div>
     <hr>
     <h3>Most Actively Traded</h3>
     <div class="row row-cols-1 row-cols-md-2 g-4">
       ${defaultData.most_actively_traded.map(stock => `
         <div class="col">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">${stock.symbol}</h5>
               <p class="card-text">Change: ${stock.change_amount} (${stock.change_percentage}%)</p>
             </div>
           </div>
         </div>
       `).join('')}
     </div>
   `;
  defaultStockNews.innerHTML = defaultStockNews.innerHTML =  `
  <h3>Stock News</h3>
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
};

// Search button click handler
searchButton.addEventListener('click', async () => {
  const symbol = searchBar.value.trim();

  if (!symbol) {
    alert('Please enter a stock symbol');
    return;
  }

  // Fetch specific stock data and news
  const data = await fetchStockData(symbol);
  const news = await fetchStockNews(symbol);
  

  // Update UI with specific stock news and data (replace with actual data population logic)
  
  stockData.innerHTML = `
   <h3>Stock Data for ${symbol}</h3>
   <div class="row row-cols-1 row-cols-md-2 g-4">
     <div class="col">
       <div class="card">
         <div class="card-body">
           <h5 class="card-title">Open</h5>
           <p class="card-text">${data.open}</p>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card">
         <div class="card-body">
           <h5 class="card-title">High</h5>
           <p class="card-text">${data.close}</p>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card">
         <div class="card-body">
           <h5 class="card-title">Change</h5>
           <p class="card-text">${data.change}</p>
         </div>
       </div>
     </div>
    </div>
 `;
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
  // Clear default stock sections and make specific sections visible
  defaultStockData.innerHTML = '';
  defaultStockNews.innerHTML = '';

  stockData.classList.remove('d-none');
  stockNews.classList.remove('d-none');
  
});