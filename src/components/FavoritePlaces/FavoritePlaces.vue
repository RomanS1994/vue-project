<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../Ibutton/IButton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-gray">Додані маркери</div>
    <FavoritePlace v-for="el in 4" />
    <IButton class="w-full mt-10">Додати маркер</IButton>/>
  </div>
</template>
