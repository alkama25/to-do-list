<template>
  <main class="border-b border-chrome pb-4">
    <div class="flex items-center my-3">
      <ChevronDown></ChevronDown>
      <p class="text-gray-light text-base ml-3">5 Done</p>
    </div>
   
    <div class="space-y-4">
      <TodoItem></TodoItem>
    </div>
  </main>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import ChevronDown from './icons/IconChevronDown.vue'
</script>
