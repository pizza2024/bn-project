<template>
  <div class="flex">
    <div class="flex flex-col basis-1/2 items-center px-2 py-4" :key="item.symbol" v-for="item in list">
      <div class="flex gap-2 items-baseline">
        <span class="text-2xl font-bold">
          {{ BN(item.price).decimalPlaces(18).toString() }}
        </span>
        <span class="text-md">
          {{ item.symbol?.replace('USDT', '') }}
        </span>
      </div>
      <div>≈</div>
      <div class="flex gap-2 items-baseline">
        <span class="text-xl font-medium">
          {{ BN(item.price).multipliedBy(settingStore.preferRate).decimalPlaces(2).toString() }}
        </span>
        <span class="text-sm">
          {{ settingStore.preferCurrency?.replaceAll(/(_USD)|(USD_)/g, '') }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import BN from 'bignumber.js'
import { onMounted, ref } from 'vue';
import { apiGetAllSymbolPrice } from '@/api/index'
import { useSettingStore } from '@/store/settingStore';
const settingStore = useSettingStore()
const list = ref([])
onMounted(() => {
  apiGetAllSymbolPrice({ symbols: '["ETHUSDT","BTCUSDT"]' }).then(resp => {
    list.value = resp.data

  })

})
</script>