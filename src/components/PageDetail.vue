<template>
<div>
  detail
</div>
</template>
<script setup>
import { onMounted } from 'vue';
import {apiGetAllSymbolPrice} from '@/api/index'

onMounted(() => {
  console.log('mounted')
  apiGetAllSymbolPrice().then(resp => {
    console.log(resp.data)
  })
})
</script>