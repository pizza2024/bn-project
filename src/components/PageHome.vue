<template>
  <div ref="wrapper" class="h-dvh overflow-y-hidden">
    <div class="pb-14 divide-y px-2">
      <div class="py-4 flex" :key="item.symbol" v-for="item in list">
        <div class="mr-4 basis-1/4 text-right">{{ item.symbol }}</div>
        <div>{{ BN(item.price).decimalPlaces(18).toString() }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BN from 'bignumber.js'
import BetterScroll from 'better-scroll'
import { nextTick, onMounted, ref } from 'vue';
import { apiGetAllSymbolPrice, apiGetCurrencyRate } from '@/api/index'
import _ from 'lodash'

const list = ref([])
const wrapper = ref()
const bs = ref()
const curencyList = ref([])
onMounted(() => {
  const localCurrencyListStr = localStorage.getItem('currencyList')
  if (!localCurrencyListStr) {
    apiGetCurrencyRate().then(resp => {
      if (resp.data && resp.data.success) {
        localStorage.setItem('currencyList', JSON.stringify(resp.data.data))
      }
    })
  } else {
    const localCurrencyList = JSON.parse(localCurrencyListStr)
    curencyList.value = localCurrencyList
  }
  
  apiGetAllSymbolPrice({ symbols: '["ETHUSDT","BTCUSDT","BATUSDT"]' }).then(resp => {
    if (_.isArray(resp.data)) {
      list.value = resp.data
    } else {
      list.value = [resp.data]
    }
    nextTick(() => {
      bs.value = new BetterScroll(wrapper.value, {
        scrollY: true,
        click: true,
        probeType: 3,
      })
    })

  })

})
</script>