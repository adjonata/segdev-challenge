<script setup lang="ts">
import Layout from "./components/layout/index.vue";
</script>

<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<style lang="scss">
body {
  background-color: $background;
}
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
