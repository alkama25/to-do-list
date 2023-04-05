<template>
  <div>
    <button
      class="focus:outline-none border flex cursor-pointer flex-row rounded px-4 py-3 text-sm"
      :class="buttonClasses"
      @click.prevent="$emit('action')"
    >
      {{ label }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string,
  type: string,
  action: Function
}>()
const buttonClasses = computed(() => {
  let classes = {
    'bg-blue border-blue-dark text-white': props.type === 'primary',
    'bg-gray-light border-gray text-white': props.type === 'disabled',
    'bg-white border-gray-light text-blue': props.type === 'disabled'
  }
  return classes
})
</script>
