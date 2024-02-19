import { apiGetCurrencyRate } from '@/api';
import { defineStore } from 'pinia';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSettingStore = defineStore('setting', {
  state: () => ({
    currencyList: [],
  }),
  getter: {},
  actions: {
    async queryCurrencyList() {
      const resp = await apiGetCurrencyRate();
      if (resp.data && resp.data.success) {
        this.currencyList = resp.data.data;
      }
    },
  },
});
