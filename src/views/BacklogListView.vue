<template>
  <main>
    <div class="flex items-center justify-between">
      <TDInput placeholder="Search" class="flex-1" :disabled="false"></TDInput>
      <TDButton type="primary" label="Sort by Name" class="pl-2.5"></TDButton>
      <TDButton type="primary" label="Sort by Date" class="pl-2.5"></TDButton>
    </div>
    <div class="space-y-4 mt-4">
      <TodoItem></TodoItem>
    </div>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
import TDButton from '../components/TDButton.vue'
import TDInput from '../components/TDInput.vue'
import TodoItem from '../components/TodoItem.vue'
</script>
