<script setup lang="ts">
import { useLocationsStore } from "../../store";
import Pagination from "../../components/common/Pagination.vue";
import List from "../../components/common/List.vue";
import LocationItem from "../../components/modules/locations/LocationItem.vue";

const store = useLocationsStore();

store.loadLocations();
</script>

<template>
  <Pagination
    plural-label="Locais"
    singular-label="Local"
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
    <LocationItem v-for="location in store.atualPage" :location="location" />
  </List>
</template>

<style scoped></style>
