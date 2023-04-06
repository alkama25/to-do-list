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
          :class="props.listItem.completed ? 'text-gray-dark line-through' : 'text-black'"
        >
          {{ props.listItem.text }}
        </p>
        <p class="text-xs text-gray-dark">{{ props.listItem.createdDate }}</p>
      </div>
    </div>
    <EllipsisHorizontal v-if="props.listItem.pending"></EllipsisHorizontal>
    <TDButton
      v-if="props.listItem.backlog"
      label="Move to List"
      button-type="secondary"
      @action="useTodoListStore().moveTodo(props.listItem, 'pending')"
    ></TDButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EllipsisHorizontal from './icons/IconEllipsisHorizontal.vue'
import TDButton from '../components/TDButton.vue'
import { useTodoListStore } from '@/stores/index'
import type { Todo } from '../types.ts'

const props = defineProps<{
  listItem: Todo
  value?: boolean
}>()
const emit = defineEmits(['onChangeValue'])

const checked = ref<boolean>(props.listItem.completed ?? false)
const onChange = (event: { target: { checked: boolean } }) => {
  checked.value = event.target.checked
  emit('onChangeValue', checked.value)
}
</script>
