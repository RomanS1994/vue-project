<script setup>
import IButton from './components/Ibutton/IButton.vue'

const classes = {
  'bg-black': false,
  'bg-red': true,
  'btn': true,
}
</script>

<template>Hello vue <IButton :class="classes"></IButton></template>

<style>
.btn {
  color: white;
}

.bg-black {
  background-color: black;
}

.bg-red {
  background-color: red;
}
</style>
