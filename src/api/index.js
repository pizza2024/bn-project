import http from '@/utils/http';

export const apiGetAllSymbolPrice = http.get('/api/v3/ticker/price');
