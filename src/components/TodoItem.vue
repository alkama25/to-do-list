<template>
  <div class="flex justify-between">
    <div class="flex items-start">
      <input
        type="checkbox"
        v-model="checked"
        class="w-6 h-6 mt-0.5 rounded-full focus:ring-white shadow-sm cursor-pointer"
        @click="onChange"
      />

      <div class="ml-2">
        <p
          class="text-base"
          :class="
            props.listItem.status === TodoStatus.Completed
              ? 'text-gray-dark line-through'
              : 'text-black'
          "
        >
          {{ props.listItem.text }}
        </p>
        <p class="text-xs text-gray-dark">{{ props.listItem.createdDate }}</p>
      </div>
    </div>

    <div class="relative cursor-pointer" v-if="props.listItem.status === TodoStatus.Pending">
      <div
        class="flex h-8 w-8 items-center justify-center text-gray-dark hover:text-black hover:rounded-full hover:bg-chrome"
        tabindex="0"
        @click.stop="isDropdownVisible = !isDropdownVisible"
        @blur="isDropdownVisible = false"
      >
        <EllipsisHorizontal></EllipsisHorizontal>
      </div>

      <div
        v-if="isDropdownVisible"
        class="absolute right-0 z-10 mt-2 origin-top-left rounded bg-white border border-gray-light"
      >
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="option-menu"
          v-for="(option, index) in todoActionItems"
          :key="option.type"
          :class="index !== todoActionItems.length - 1 ? 'border-b border-gray-light' : ''"
        >
          <a
            class="w-max flex px-4 py-2 text-sm text-blue"
            role="menuitem"
            @mousedown.stop.prevent="option.action(props.listItem)"
          >
            {{ option.text }}
          </a>
        </div>
      </div>
    </div>

    <TDButton
      v-if="props.listItem.status === TodoStatus.Backlog"
      label="Move to List"
      button-type="secondary"
      @action="store.changeTodoStatus({ ...props.listItem, status: TodoStatus.Pending })"
    ></TDButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EllipsisHorizontal from './icons/IconEllipsisHorizontal.vue'
import TDButton from '../components/TDButton.vue'
import { useTodoListStore } from '@/stores/index'
import type { Todo, TodoDropdownItem } from '../types'
import { TodoStatus } from '../enums'

const props = defineProps<{
  listItem: Todo
  value?: boolean
}>()
const emit = defineEmits(['onChangeValue'])

const store = useTodoListStore()

const checked = ref<boolean>(props.listItem.status === TodoStatus.Completed ?? false)
const isDropdownVisible = ref<boolean>(false)
const onChange = (event: MouseEvent) => {
  checked.value = event.target.checked
  emit('onChangeValue', checked.value)
}
const todoActionItems = ref<TodoDropdownItem[]>([
  {
    text: 'Delete',
    type: 'delete',
    action: () => store.deleteTodo(props.listItem)
  },
  {
    text: 'Move to Backlog',
    type: 'backlog',
    action: () => store.changeTodoStatus({ ...props.listItem, status: TodoStatus.Backlog })
  }
])
</script>
