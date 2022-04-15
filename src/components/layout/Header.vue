<script setup lang="ts">
import Menu from "./Menu.vue";
</script>

<template>
  <header class="header">
    <img
      class="header__logo"
      src="../../assets/images/logo.png"
      alt="Logo.png"
    />
    <Menu />
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__logo {
    width: 320px;
    max-width: 70%;
  }
}
</style>
