<template>
  <main>
    <p class="text-xl font-bold">404</p>
    <p class="text-sm text-gray-dark">The page you are trying to find does not exist</p>
    <TDButton class="mt-10" label="Go Back to Home" @action="$router.push('/')"></TDButton>
  </main>
</template>
<script setup lang="ts">
import TDButton from '../components/common/TDButton.vue'
</script>
