<template>
  <div class="flex items-center mt-auto pb-20">
    <TDInput placeholder="Add note" class="flex-1"></TDInput>
    <TDButton type="primary" label="Add Item" class="pl-2.5"></TDButton>
  </div>
</template>
<script setup lang="ts">
import TDButton from '../components/TDButton.vue'
import TDInput from '../components/TDInput.vue'
</script>
