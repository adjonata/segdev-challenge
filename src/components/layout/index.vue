<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
  <Header />
  <main class="content">
    <slot />
  </main>
</template>

<style scoped>
.content {
  width: 100%;
}
</style>
