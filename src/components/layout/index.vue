<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
  <Header />
  <main class="content">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.content {
  width: $lg;
  max-width: 100%;
  margin: 20px 0 100px;
  padding: 0 20px;
}
</style>
