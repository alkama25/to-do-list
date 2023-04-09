<template>
  <div class="relative mt-1 rounded-md">
    <input
      class="w-full rounded px-4 py-3 text-sm border border-gray-light focus:border-gray-dark outline-none"
      :placeholder="props.placeholder"
      v-model="inputValue"
      @input="(event) => $emit('onInput', (event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps<{
  placeholder?: string
  value: string
}>()
const inputValue = ref<string>(props.value)
watch(
  () => props.value,
  (value) => (inputValue.value = value)
)
</script>
