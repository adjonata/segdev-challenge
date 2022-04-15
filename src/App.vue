<script setup lang="ts">
import Layout from "./components/layout/index.vue";
</script>

<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
