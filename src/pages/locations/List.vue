<script setup lang="ts">
import { useLocationsStore } from "../../store";

const store = useLocationsStore();

store.loadLocations();

function changeNameFilter(event: Event) {
  const value = (event.target as any).value as string;
  store.changeNameFilter(value);
}
</script>

<template>
  <div class="head">
    <h4>Página atual {{ store.filters.page }}</h4>
    <p>Total de páginas {{ store.totalPages }}</p>

    <input type="text" :value="store.filters.name" @input="changeNameFilter" />
    <button
      :disabled="!store.isEnableToDecrementPage"
      @click="store.decrementPage()"
    >
      -
    </button>
    <button
      :disabled="!store.isEnableToIncrementPage"
      @click="store.incrementPage()"
    >
      +
    </button>
  </div>

  <p v-if="store.isLoading">Carregando...</p>
  <p v-else-if="!store.atualPage.length">Nenhum resultado encontrado</p>

  <ul>
    <li v-for="episode in store.atualPage">
      {{ episode.name }}
    </li>
  </ul>
</template>

<style scoped></style>
