<template>
  <main class="m-4 sm:m-0 lg:m-0">
    <div
      class="flex items-center justify-between py-2 flex-wrap sm:flex-no-wrap"
      v-if="listItems.length >= 2 || searchTerm.length"
    >
      <TDInput
        placeholder="Search"
        class="flex-1"
        :value="searchTerm"
        @onInput="onSearchTermChange"
      ></TDInput>
      <div class="flex items-center mt-2 xs:mt-0">
        <TDButton
          type="primary"
          label="Sort by Name"
          class="pl-2.5 lg:pl-5"
          @action="sortTodoList({ list: listItems, property: 'text', sortOrder: SortOrder.ASC })"
        ></TDButton>
        <TDButton
          type="primary"
          label="Sort by Date"
          class="pl-2.5 lg:pl-5"
          @action="
            sortTodoList({ list: listItems, property: 'createdDate', sortOrder: SortOrder.DESC })
          "
        ></TDButton>
      </div>
    </div>
    <CustomTransition>
      <TodoItem
        v-for="item in listItems"
        :key="item.id"
        :list-item="item"
        @on-change-value="store.changeTodoStatus({ ...item, status: TodoStatus.Completed })"
      ></TodoItem>
    </CustomTransition>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
import { ref, computed, watch, Transition } from 'vue'
import TDButton from '../components/common/TDButton.vue'
import TDInput from '../components/common/TDInput.vue'
import TodoItem from '../components/TodoItem.vue'
import CustomTransition from '../components/common/CustomTransition.vue'
import { useTodoListStore } from '@/stores/index'
import type { Todo, SortParams } from '../types'
import { TodoStatus, SortOrder } from '../enums'
import { sortByProperty } from '../composables/sortList'

const store = useTodoListStore()
const searchTerm = ref<string>('')
const isSortingEnabled = ref<boolean>(false)
const sortedList = ref<Todo[]>([])

const listItems = computed<Todo[]>(() => {
  if (isSortingEnabled.value) return sortedList.value
  if (searchTerm.value.length === 0) return store.backlogList
  return store.backlogList.filter((todo: Todo) =>
    todo.text.toLowerCase().includes(searchTerm.value)
  )
})
const onSearchTermChange = (searchString: string) => (searchTerm.value = searchString)

const sortTodoList = (params: SortParams) => {
  const formattedListItems = listItems.value.map((todo: Todo) => ({
    ...todo,
    createdDate: new Date(todo.createdDate)
  }))
  sortedList.value = sortByProperty({ ...params, list: formattedListItems })
  isSortingEnabled.value = true
}
watch(
  () => store.backlogList,
  (newList: Todo[], oldList: Todo[]) => {
    if (newList.length !== oldList.length && isSortingEnabled.value) isSortingEnabled.value = false
  }
)
</script>
