<template>
  <TabGroup>
    <TabList>
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="{ 'bg-blue-500 text-white': selected, 'bg-white text-black': !selected }"
        >
          Tab 1
        </button>
      </Tab>
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="{ 'bg-blue-500 text-white': selected, 'bg-white text-black': !selected }"
        >
          Tab 2
        </button>
      </Tab>
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="{ 'bg-blue-500 text-white': selected, 'bg-white text-black': !selected }"
        >
          Tab 3
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>