<template>
  <div ref="wrapper" class="overflow-hidden h-dvh">
    <div class="py-14 divide-y px-2">
      <div v-for="(item) in settingStore.filteredCurrencyList" :key="item.pair" class="flex items-center py-2 gap-3" @click="selectCurrency(item)">
        <img :src="item.imageUrl" class="size-8"/>
        <div class="text-base grow">{{ item.abbr }}</div>
        <div class="text-base flex gap-1 items-baseline">
          <span class="text-sm">
            1 {{ item.to }} =
          </span>
          <span class="text-xl font-bold">
            {{ BN(item.rate).decimalPlaces(2).toFormat() }}
          </span>
          <span class="text-sm font-medium">
            {{ item.from }}
          </span>
          </div>
        <div class="text-base" :class="item.active ? 'visible' : 'invisible'">
          <IconCheck/>
        </div>
      </div>
    </div>
  </div>
  <div class="h-14 fixed top-0 inset-x-0 bg-white flex items-center p-2">
    <input v-model="settingStore.query" class="border border-black p-2 grow rounded-lg"/>
    <IconXCircle v-if="!!settingStore.query" class="fixed right-4 inset-y-center" @click="settingStore.query = ''"/>
  </div>
</template>

<script setup>
import BN from 'bignumber.js'
import {useSettingStore} from '@/store/settingStore'
import { nextTick, onMounted, ref } from 'vue';
import BetterScroll from 'better-scroll'
import IconCheck from '@/components/IconCheck.vue'
import IconXCircle from '@/components/IconXCircle.vue'
const bs = ref()
const wrapper = ref()
const settingStore = useSettingStore()
onMounted(() => {
  if (settingStore.currencyList.length === 0) {
    settingStore.queryCurrencyList().then(() => {
      nextTick(() => {
        bs.value = new BetterScroll(wrapper.value, {
          click: true
        })
      })
    })
  } else {
    nextTick(() => {
      bs.value = new BetterScroll(wrapper.value, {
        click: true
      })
    })
  }
})

function selectCurrency(x) {
  settingStore.preferCurrency = x.pair
  settingStore.preferRate = x.rate
  window.localStorage.setItem('preferCurrency', x.pair)
  window.localStorage.setItem('preferRate', x.rate)
}
</script>