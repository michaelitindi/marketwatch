const stocknews = require('../src/stockdata');
test('fetchStockNews fetches and parses stock data', async () => {
  const data = await stocknews.fetchStockNews();
  expect(data).toEqual(expect.any(Object));   
});