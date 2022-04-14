<script setup lang="ts">
import { useRickAndMorty } from "../hooks";

const { listEpisodes } = useRickAndMorty();
const { data, isFetched, isLoading, hasNextPage, fetchNextPage } =
  listEpisodes();
</script>

<template>
  <router-link :to="{ name: 'characters' }">Personagens</router-link>
  <div>Episódios</div>
  <p v-if="isLoading">Carregando...</p>
  <div v-if="isFetched">
    <ul v-for="(page, pageIndex) in data?.pages" :key="pageIndex">
      <li v-for="episode in page.results">
        {{ episode.name }}
      </li>
    </ul>
  </div>
  <span v-if="hasNextPage" @click="fetchNextPage()">Ver mais</span>
</template>

<style scoped></style>
