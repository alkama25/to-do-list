<template>
  <main class="flex flex-col justify-between h-full">
    <div>
      <CompletedListItems></CompletedListItems>
      <TodoListItems></TodoListItems>
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
import CompletedListItems from '../components/CompletedListItems.vue'
import TodoListItems from '../components/TodoListItems.vue'
</script>
