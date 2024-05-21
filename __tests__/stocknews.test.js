const stocknews = require('../src/stockdata');
test('fetchStockNews fetches and parses stock data', async () => {
  const data = await fetchStockNews();
  expect(data).toEqual(expect.any(Object));   
});