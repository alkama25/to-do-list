<template>
  <section v-if="completedListItems.length">
    <div
      class="flex items-center my-3 cursor-pointer"
      @click="isCompletedItemsVisible = !isCompletedItemsVisible"
    >
      <TDIcon
        :name="isCompletedItemsVisible ? 'chevron-down' : 'chevron-right'"
        classes="text-gray-light"
      ></TDIcon>
      <p class="text-gray-light text-base ml-3">{{ completedListItems.length }} Done</p>
    </div>

    <CustomTransition>
      <template v-if="isCompletedItemsVisible">
        <TodoItem
          class="space-y-4"
          v-for="item in completedListItems"
          :key="item.id"
          :list-item="item"
          @on-change-value="
            useTodoListStore().changeTodoStatus({ ...item, status: TodoStatus.Pending })
          "
        ></TodoItem>
      </template>
    </CustomTransition>
  </section>
  <div
    v-if="completedListItems.length"
    :class="{
      'border-b border-chrome -mx-4 sm:-mx-0 ': todoItems.length,
      'pb-4': todoItems.length && isCompletedItemsVisible
    }"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import TDIcon from '@/components/common/TDIcon.vue'
import CustomTransition from '@/components/common/CustomTransition.vue'
import { useTodoListStore } from '@/stores/index'
import type { Todo } from '@/types'
import { TodoStatus } from '@/enums'

const isCompletedItemsVisible = ref<boolean>(true)
const todoItems = computed<Todo[]>(() => useTodoListStore().todoList)
const completedListItems = computed<Todo[]>(() => useTodoListStore().completeList)
</script>
