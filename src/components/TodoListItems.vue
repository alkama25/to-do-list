<template>
  <main class="py-4" v-if="listItems.length">
    <CustomTransition>
      <div v-for="item in listItems" :key="item.id">
        <TodoItem
          :list-item="item"
          class="space-y-4"
          @on-change-value="
            useTodoListStore().changeTodoStatus({ ...item, status: TodoStatus.Completed })
          "
        ></TodoItem>
      </div>
    </CustomTransition>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import CustomTransition from '../components/common/CustomTransition.vue'
import { useTodoListStore } from '@/stores/index'
import type { Todo } from '../types'
import { TodoStatus } from '../enums'

const listItems = computed<Todo[]>(() => useTodoListStore().todoList)
</script>
