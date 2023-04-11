<template>
  <div class="mt-5 text-xl text-gray font-bold" v-if="isValidRoute">
    <RouterLink to="/">To Do List</RouterLink>
    <RouterLink to="/backlog" class="ml-20">Backlog</RouterLink>
    <div class="border-b border-chrome my-3"></div>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isValidRoute = computed<boolean>(() => route.name !== 'not-found')
</script>
