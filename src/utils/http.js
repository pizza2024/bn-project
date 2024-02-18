import axios from 'axios';
const http = axios.create({
  baseURL: 'https://api.binance.com',
});
export default http;
