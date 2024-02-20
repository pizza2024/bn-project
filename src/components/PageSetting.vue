<template>
  <div ref="wrapper" class="overflow-hidden h-dvh">
    <div class="py-14 divide-y px-2">
      <div v-for="(item) in settingStore.filteredCurrencyList" :key="item.pair" class="flex items-center py-2 gap-3">
        <img :src="item.imageUrl" class="size-8"/>
        <div class="text-base">{{ item.fullName }}</div>
      </div>
    </div>
  </div>
  <div class="h-14 fixed top-0 inset-x-0 bg-white flex items-center p-2">
    <input v-model="settingStore.query" class="border border-black p-2 grow rounded-lg"/>
  </div>
</template>

<script setup>
import {useSettingStore} from '@/store/settingStore'
import { nextTick, onMounted, ref } from 'vue';
import BetterScroll from 'better-scroll'
const bs = ref()
const wrapper = ref()
const settingStore = useSettingStore()
onMounted(() => {
  if (settingStore.currencyList.length === 0) {
    settingStore.queryCurrencyList().then(() => {
      nextTick(() => {
        bs.value = new BetterScroll(wrapper.value)
      })
    })
  } else {
    nextTick(() => {
      bs.value = new BetterScroll(wrapper.value)
    })
  }
  
  
})
</script>