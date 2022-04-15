<script setup lang="ts">
import { Episode } from "../../../types";

interface Props {
  episode: Episode;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="episode-item">
    <h3>{{ episode.name }}</h3>
    <span>Lançamento: {{ episode.air_date }}</span>
  </div>
</template>

<style scoped lang="scss">
.episode-item {
  background: #303030;
  padding: 10px;
  border-radius: 3px;

  span {
    font-size: 14px;
    color: grey;
  }
}
</style>
