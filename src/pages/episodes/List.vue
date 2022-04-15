<script setup lang="ts">
import { useEpisodesStore } from "../../store";
import Pagination from "../../components/common/Pagination.vue";

const store = useEpisodesStore();

store.loadEpisodes();

function changeNameFilter(event: Event) {
  const value = (event.target as any).value as string;
  store.changeNameFilter(value);
}
</script>

<template>
  <Pagination
    :atual-page="store.filters.page"
    :total-pages="store.totalPages"
    :search-value="store.filters.name || ''"
    :is-enable-to-decrement="store.isEnableToDecrementPage"
    :is-enable-to-increment="store.isEnableToIncrementPage"
    :is-loading="store.isLoading"
    @decrement-page="store.decrementPage()"
    @increment-page="store.incrementPage()"
    @change-search="store.changeNameFilter($event)"
  />

  <p v-if="store.isLoading">Carregando...</p>
  <p v-else-if="!store.atualPage.length">Nenhum resultado encontrado</p>

  <ul>
    <li v-for="episode in store.atualPage">
      {{ episode.name }}
    </li>
  </ul>
</template>

<style scoped></style>
