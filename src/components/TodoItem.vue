<template>
  <div class="flex justify-between">
    <div class="flex items-start">
      <div class="w-5 h-5 rounded-lg bg-white border border-gray-light mt-1"></div>
      <div class="ml-2">
        <p class="text-base text-black">Roboto, Regular, 15px</p>
        <p class="text-xs text-gray-dark">Roboto, Regular, 10px</p>
      </div>
    </div>
    <div><EllipsisHorizontal></EllipsisHorizontal></div>
  </div>
</template>

<script setup lang="ts">
import EllipsisHorizontal from './icons/IconEllipsisHorizontal.vue'
</script>
