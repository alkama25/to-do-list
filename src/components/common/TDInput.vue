<template>
  <div class="relative rounded-md">
    <input
      class="w-full rounded px-4 py-3 text-base border border-gray-light focus:border-gray-dark outline-none"
      :placeholder="props.placeholder"
      :value="inputValue"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps<{
  placeholder?: string
  value: string
}>()

const emit = defineEmits(['onInput'])
const inputValue = ref<string>(props.value)
const onInput = (event: Event) => {
  inputValue.value = (event.target as HTMLInputElement).value
  emit('onInput', inputValue.value)
}
watch(
  () => props.value,
  (value) => (inputValue.value = value)
)
</script>
