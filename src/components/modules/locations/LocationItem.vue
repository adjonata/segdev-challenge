<script setup lang="ts">
import { Location } from "../../../types";

interface Props {
  location: Location;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="location-item">
    <h3>{{ location.name }}</h3>
    <ul>
      <li><b>Tipo:</b> {{ location.type }}</li>
      <li><b>Tipo:</b> {{ location.type }}</li>
      <li><b>Dimensão:</b> {{ location.dimension }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.location-item {
  background: #303030;
  padding: 10px;
  border-radius: 3px;

  span {
    font-size: 14px;
    color: grey;
  }
}
</style>
