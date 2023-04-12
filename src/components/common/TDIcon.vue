<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 cursor-pointer disabled:cursor-default disabled:pointer-events-none"
      :class="classes"
      :disabled="disabled"
    >
      <path stroke-linecap="round" stroke-linejoin="round" :d="path" />
    </svg>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '../../resources/icons'

const props = defineProps<{
  name: string
  disabled?: boolean
  classes?: string
}>()

const path = computed<string>(() => icons[props.name])
</script>
