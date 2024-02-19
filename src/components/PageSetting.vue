<template>
  <div ref="wrapper" class="overflow-hidden h-dvh">
    <div class="pb-14 divide-y px-2">
      <div v-for="(item) in settingStore.currencyList" :key="item.pair" class="flex items-center py-2 gap-3">
        <img :src="item.imageUrl" class="size-8"/>
        <div class="text-base">{{ item.fullName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useSettingStore} from '@/store/settingStore'
import { nextTick, onMounted, ref } from 'vue';
import BetterScroll from 'better-scroll'
const bs = ref()
const wrapper = ref()
const settingStore = useSettingStore()
onMounted(async () => {
  await settingStore.queryCurrencyList()
  nextTick(() => {
    bs.value = new BetterScroll(wrapper.value)
  })
})
</script>