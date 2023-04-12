<template>
  <div>
    <button
      class="focus:outline-none border flex flex-row rounded px-4 py-3 text-sm"
      :class="buttonClasses"
      @click.prevent="$emit('action')"
    >
      {{ label }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

export interface IProps {
  buttonType?: 'primary' | 'secondary'
  label?: string,
  disabled?:boolean
}

const props = withDefaults(defineProps<IProps>(), {
  buttonType: 'primary'
})

const buttonClasses = computed(() => {
  const classes = {
    'bg-blue border-blue-dark text-white cursor-pointer': props.buttonType === 'primary',
    'bg-gray-light border-gray text-white cursor-default pointer-events-none':
      props.disabled,
    'bg-white border-gray-light text-blue cursor-pointer': props.buttonType === 'secondary'
  }
  return classes
})
</script>
