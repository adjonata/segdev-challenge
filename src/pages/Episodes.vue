<script setup lang="ts">
import { useQuery } from "../hooks";

const { listEpisodes } = useQuery();
const { data: episodes, isFetched, isLoading } = listEpisodes();
</script>

<template>
  <router-link :to="{ name: 'characters' }">Personagens</router-link>
  <div>Episódios</div>
  <p v-if="isLoading">Carregando...</p>
  <ul v-if="isFetched">
    <li v-for="episode in episodes" :key="episode.id">
      {{ episode.name }}
    </li>
  </ul>
</template>

<style scoped></style>
