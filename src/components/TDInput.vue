<template>
  <div class="relative mt-1 rounded-md">
    <input
      class="w-full rounded px-4 py-3 text-sm border border-gray-light focus:border-gray-dark disabled:opacity-50 outline-none"
      :placeholder="placeholder"
      v-model="inputValue"
      :disabled="disabled"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  placeholder: string
  value: string
  disabled: boolean
}>()
const inputValue = ref<string>(props.value)
</script>
