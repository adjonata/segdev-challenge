<script setup lang="ts">
import { useRoute } from "vue-router";
import menuItems from "../../utils/navigation/menuItems";

const route = useRoute();
</script>

<template>
  <ul class="menu">
    <li
      v-for="item in menuItems"
      :key="item.label"
      :class="['menu__item', { active: route.name === item.routeName }]"
    >
      <router-link :to="{ name: item.routeName }">{{ item.label }}</router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;

  &__item {
    margin: 5px 10px;
    padding-bottom: 3px;
    border-bottom: solid 2px transparent;
    font-size: 13px;
    text-transform: uppercase;

    &.active {
      border-bottom-color: $pink;
    }
  }
}
</style>
