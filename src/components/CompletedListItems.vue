<template>
  <main class="border-b border-chrome pb-4" v-if="listItems.length">
    <div class="flex items-center my-3">
      <TDIcon name="chevron-down" classes="text-gray-light"></TDIcon>
      <p class="text-gray-light text-base ml-3">{{ listItems.length }} Done</p>
    </div>

    <div class="space-y-4" v-for="item in listItems" :key="item.id">
      <TodoItem
        :list-item="item"
        @on-change-value="
          useTodoListStore().changeTodoStatus({ ...item, status: TodoStatus.Pending })
        "
      ></TodoItem>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import ChevronDown from './icons/IconChevronDown.vue'
import TDIcon from './TDIcon.vue'
import { useTodoListStore } from '@/stores/index'
import { TodoStatus } from '../enums'

const listItems = computed(() => useTodoListStore().completeList)
</script>
