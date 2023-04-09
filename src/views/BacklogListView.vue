<template>
  <main>
    <div class="flex items-center justify-between" v-if="listItems.length >= 2">
      <TDInput placeholder="Search" class="flex-1" :disabled="false"></TDInput>
      <TDButton type="primary" label="Sort by Name" class="pl-2.5"></TDButton>
      <TDButton type="primary" label="Sort by Date" class="pl-2.5"></TDButton>
    </div>
    <div class="space-y-4 mt-4" v-for="item in listItems" :key="item.id">
      <TodoItem
        :list-item="item"
        @on-change-value="useTodoListStore().changeTodoStatus({ ...item, status: TodoStatus.Completed })"
      ></TodoItem>
    </div>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import TDButton from '../components/TDButton.vue'
import TDInput from '../components/TDInput.vue'
import TodoItem from '../components/TodoItem.vue'
import { useTodoListStore } from '@/stores/index'
import { TodoStatus } from '../enums'

const listItems = computed(() => useTodoListStore().backlogList)
</script>
