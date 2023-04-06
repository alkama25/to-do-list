<template>
  <main class="py-4" v-if="listItems.length">
    <div v-for="item in listItems" :key="item.id">
      <TodoItem
        :list-item="item"
        class="space-y-4"
        @on-change-value="useTodoListStore().moveTodo(item, 'completed')"
      ></TodoItem>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodoListStore } from '@/stores/index'

const listItems = computed(() => useTodoListStore().todoList)
</script>
