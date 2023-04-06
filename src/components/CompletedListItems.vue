<template>
  <main class="border-b border-chrome pb-4" v-if="listItems.length">
    <div class="flex items-center my-3">
      <ChevronDown></ChevronDown>
      <p class="text-gray-light text-base ml-3">{{ listItems.length }} Done</p>
    </div>

    <div class="space-y-4" v-for="item in listItems" :key="item.id">
      <TodoItem
        :list-item="item"
        @on-change-value="useTodoListStore().moveTodo(item, 'pending')"
      ></TodoItem>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import ChevronDown from './icons/IconChevronDown.vue'
import { useTodoListStore } from '@/stores/index'

const listItems = computed(() => useTodoListStore().completeList)
</script>
