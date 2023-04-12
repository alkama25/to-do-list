<template>
  <section class="py-4" v-if="listItems.length">
    <CustomTransition>
      <TodoItem
        v-for="item in listItems"
        :key="item.id"
        :list-item="item"
        @on-change-value="
          useTodoListStore().changeTodoStatus({ ...item, status: TodoStatus.Completed })
        "
      ></TodoItem>
    </CustomTransition>
  </section>
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
