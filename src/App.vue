<template>
  <div class="mt-20 text-xl text-black font-bold">
    <RouterLink to="/" class="text-black">To Do List</RouterLink>
    <RouterLink to="/about" class="ml-20 text-black">Backlog</RouterLink>
    <div class="border-b border-chrome my-3"></div>
  </div>

  <RouterView />
</template>
<script setup lang="ts"></script>

