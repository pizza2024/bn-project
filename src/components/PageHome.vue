<template>
  <div ref="wrapper" class="h-dvh">
    <div class="py-14">
      <div class="p-2" :key="item.symbol" v-for="item in displayList">
        <div class="flex items-baseline gap-1">
          <div class="invisible">≈</div>
          <span class="text-xl font-bold">1</span>
          <span class="text-sm">
            {{ item.symbol?.replace('USDT', '') }}
          </span>
          <!-- <div>≈</div>
          <span class="text-xl font-bold">
            {{ BN(item.price).decimalPlaces(18).toFormat() }}
          </span>
          <span class="text-sm">USDT</span> -->
        </div>
        <div class="flex items-baseline gap-1">
          <!-- <span class="text-md invisible">
            1 {{ item.symbol?.replace('USDT', '') }}
          </span> -->
          <div>≈</div>
          <span class="text-xl font-bold">
            {{ BN(item.price).decimalPlaces(18).toFormat() }}
          </span>
          <span class="text-sm">USDT</span>
        </div>
        <div class="flex items-baseline gap-1">
          <!-- <span class="text-md invisible">
            1 {{ item.symbol?.replace('USDT', '') }}
          </span> -->
          <div>≈</div>
          <span class="text-lg font-medium">
            {{ BN(item.price).multipliedBy(settingStore.preferRate).decimalPlaces(18).toFormat() }}
          </span>
          <span class="text-sm">
            {{ settingStore.preferCurrency?.replaceAll(/(_USD)|(USD_)/g, '') }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="h-14 fixed top-0 inset-x-0 bg-white flex items-center p-2">
    <input v-model="state.query" type="text" class="border border-black p-2 grow rounded-lg">
    <IconXCircle v-if="!!state.query" class="fixed right-4 inset-y-center" @click="state.query = ''"/>
  </div>
</template>
<script setup>
import _ from 'lodash'
import BS from 'better-scroll'
import BN from 'bignumber.js'
import { nextTick, onMounted, ref, reactive, computed } from 'vue';
import { apiGetAllSymbolPrice } from '@/api/index'
import { useSettingStore } from '@/store/settingStore';
import IconXCircle from '@/components/IconXCircle.vue'
const wrapper = ref()
const settingStore = useSettingStore()
const list = ref([])
const state = reactive({
  query: ''
})
const displayList = computed(() => {
  return list.value.filter(x => {
    return _.upperCase(x.symbol)?.includes(_.upperCase(state.query))
  })
})
onMounted(() => {
  apiGetAllSymbolPrice().then(resp => {
    list.value = resp.data?.filter(x => {
      return x.symbol?.includes('USDT')
    })
    nextTick(() => {
      new BS(wrapper.value, {
        click: true,
        useTransition: false
      })
    })
  })

})
</script>