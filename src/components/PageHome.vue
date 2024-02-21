<template>
  <div ref="wrapper" class="pb-14 h-dvh">
    <div>
      <div class="flex items-baseline gap-1 p-2" :key="item.symbol" v-for="item in list">
        <span class="text-md">
          {{ item.symbol?.replace('USDT', '') }}
        </span>
        <span class="text-2xl font-bold">
          {{ BN(item.price).decimalPlaces(18).toString() }}
        </span>
        <div>≈</div>
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
import BS from 'better-scroll'
import BN from 'bignumber.js'
import { nextTick, onMounted, ref } from 'vue';
import { apiGetAllSymbolPrice } from '@/api/index'
import { useSettingStore } from '@/store/settingStore';
const wrapper = ref()
const settingStore = useSettingStore()
const list = ref([])
onMounted(() => {
  apiGetAllSymbolPrice().then(resp => {
    list.value = resp.data
    nextTick(() => {
      new BS(wrapper.value, {
        click: true
      })
    })
  })

})
</script>