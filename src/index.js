import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import fetchStockData from './stockdata';
import fetchStockNews from './stocknews';


fetchStockData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

fetchStockNews()
  .then(data => {
    console.log(data);
  }) 
  .catch(error => {
    console.log(error);
  });