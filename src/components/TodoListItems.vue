<template>
  <section :class="listItems.length ? 'py-4' : ''">
    <CustomTransition>
      <template v-if="listItems.length">
        <TodoItem
          v-for="item in listItems"
          :key="item.id"
          :list-item="item"
          @on-change-value="
            useTodoListStore().changeTodoStatus({ ...item, status: TodoStatus.Completed })
          "
        ></TodoItem>
      </template>
    </CustomTransition>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import CustomTransition from '@/components/common/CustomTransition.vue'
import { useTodoListStore } from '@/stores/index'
import type { Todo } from '@/types'
import { TodoStatus } from '@/enums'

const listItems = computed<Todo[]>(() => useTodoListStore().todoList)
</script>
