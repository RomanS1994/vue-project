<script setup>
import HomepageView from './views/HomepageView.vue'

const isDesctop = window.innerWidth > 1024
const isTablet = window.innerWidth <= 1024 && window.innerWidth > 748
</script>

<template>
  <template v-if="isDesctop">
    <HomepageView />
  </template>
  <template v-else-if="isTablet"> Tablet </template>
  <template v-else> Mobile </template>
</template>
