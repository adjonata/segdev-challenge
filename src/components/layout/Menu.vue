<script setup lang="ts">
import menuItems from "../../utils/navigation/menuItems";
</script>

<template>
  <ul class="menu">
    <li v-for="item in menuItems" :key="item.label">
      <router-link :to="item.to">{{ item.label }}</router-link>
    </li>
  </ul>
</template>

<style scoped></style>
