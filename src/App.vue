<template>
  <div class="mt-5 text-xl font-bold">
    <RouterLink to="/" class="text-gray">To Do List</RouterLink>
    <RouterLink to="/about" class="ml-20 text-gray">Backlog</RouterLink>
    <div class="border-b border-chrome my-3"></div>
  </div>
  <RouterView />
</template>
<script setup lang="ts"></script>
