
const Stockdata = require('../src/stockdata');
test('fetchStockData fetches and parses stock data', async () => {
  const data = await Stockdata.fetchStockData();
  expect(data).toEqual(expect.any(Object));   
});