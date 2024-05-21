
const Stockdata = require('../src/stockdata');
test('fetchStockData fetches and parses stock data', async () => {
  const data = await fetchStockData();
  expect(data).toEqual(expect.any(Object));   
});