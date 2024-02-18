<template>
  <div class="h-screen flex flex-col divide-y items-between justify-stretch items-stretch">
    <div class="grow">
      <router-view ></router-view>
    </div>
    <div class="flex justify-stretch divide-x">
      <router-link class="grow p-4 text-center" active-class="text-white bg-indigo-500" to="/">home</router-link>
      <router-link class="grow p-4 text-center" active-class="text-white bg-indigo-500" to="/detail">detail</router-link>
      <router-link class="grow p-4 text-center" active-class="text-white bg-indigo-500" to="/test">test</router-link>
    </div>
  </div>
</template>
<script setup>

</script>
