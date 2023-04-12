<template>
  <div class="flex items-center mt-auto pb-20">
    <TDInput
      class="flex-1"
      :value="todoText"
      @onInput="updateTodoText"
      data-test-id="add-todo"
    ></TDInput>
    <TDButton
      label="Add Item"
      class="pl-2.5"
      @action="addTask"
      :disabled="isButtonDisabled"
    ></TDButton>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import TDButton from '../components/common/TDButton.vue'
import TDInput from '../components/common/TDInput.vue'
import { useTodoListStore } from '@/stores/index'

const route = useRoute()
const todoText = ref<string>('')
const isButtonDisabled = computed<boolean>(() => !todoText.value.length)

const updateTodoText = (newTodoText: string) => (todoText.value = newTodoText)
const addTask = (): void => {
  useTodoListStore().addToList(todoText.value, route.path)
  todoText.value = ''
}
</script>
