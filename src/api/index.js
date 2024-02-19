import http from '@/utils/http';
import axios from 'axios';

export const apiGetAllSymbolPrice = (params) => {
  return http.get('/api/v3/ticker/price', {
    params,
  });
};

export const apiGetCurrencyRate = () => {
  return axios.get(
    'https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency',
  );
};
