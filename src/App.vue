<template>
  <nav class="mt-5 text-xl text-gray font-bold m-4 sm:m-0" v-if="isValidRoute">
    <RouterLink to="/">To Do List</RouterLink>
    <RouterLink to="/backlog" class="ml-8 sm:ml-8 lg:ml-20">Backlog</RouterLink>
  </nav>
  <div class="border-b border-chrome my-3 m-0"></div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isValidRoute = computed<boolean>(() => route.name !== 'not-found')
</script>
