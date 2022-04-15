<script setup lang="ts">
import { useEpisodesStore } from "../../store";
import Pagination from "../../components/common/Pagination.vue";
import List from "../../components/common/List.vue";
import EpisodeItem from "../../components/modules/episodes/EpisodeItem.vue";

const store = useEpisodesStore();

store.loadEpisodes();
</script>

<template>
  <Pagination
    plural-label="Episódios"
    singular-label="Episódio"
    :atual-page="store.filters.page"
    :total-pages="store.totalPages"
    :total-items="store.totalItems"
    :search-value="store.filters.name || ''"
    :is-enable-to-decrement="store.isEnableToDecrementPage"
    :is-enable-to-increment="store.isEnableToIncrementPage"
    :is-loading="store.isLoading"
    @decrement-page="store.decrementPage()"
    @increment-page="store.incrementPage()"
    @change-search="store.changeNameFilter($event)"
  />

  <List
    :is-loading="store.isLoading"
    :is-empty="!store.atualPage.length"
    :items-per-row="4"
  >
    <EpisodeItem v-for="episode in store.atualPage" :episode="episode" />
  </List>
</template>

<style scoped></style>
