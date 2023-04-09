<template>
  <div class="mt-5 text-xl text-gray font-bold">
    <RouterLink to="/">To Do List</RouterLink>
    <RouterLink to="/backlog" class="ml-20">Backlog</RouterLink>
    <div class="border-b border-chrome my-3"></div>
  </div>
  <router-view></router-view>
  <!-- <add-todo></add-todo> -->
</template>
<script setup lang="ts"></script>
