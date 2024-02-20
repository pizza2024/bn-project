import { apiGetCurrencyRate } from '@/api';
import { defineStore } from 'pinia';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSettingStore = defineStore('setting', {
  state: () => ({
    currencyList: [],
    query: '',
    preferCurrency: 'USD_USD',
    preferRate: 1,
  }),
  getters: {
    filteredCurrencyList: (state) => {
      const reg = new RegExp(state.query, 'ig');

      return state.currencyList
        .filter((x) => {
          return reg.test(x.pair) || reg.test(x.fullName);
        })
        .map((x) => {
          let [from, to] = _.split(x.pair, '_');
          let rate = x.rate;
          if (_.toLower(from) === 'usd') {
            let temp = from;
            from = to;
            to = temp;
            rate = 1 / rate;
          }

          return {
            ...x,
            abbr: x.pair.replace(/(USD_)|(_USD)/g, ''),
            active: x.pair === state.preferCurrency,
            from,
            to,
            rate,
          };
        });
    },
  },
  actions: {
    async queryCurrencyList() {
      const resp = await apiGetCurrencyRate();
      if (resp.data && resp.data.success) {
        this.currencyList = resp.data.data;
      }
    },
  },
});
