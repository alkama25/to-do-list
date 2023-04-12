<template>
  <TransitionGroup name="fade" tag="ul">
    <slot />
  </TransitionGroup>
</template>
<style lang="scss">
.fade-move,
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 scale-y-0 translate-x-8;
}
</style>
