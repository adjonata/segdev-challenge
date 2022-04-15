<script setup lang="ts">
import { useCharactersStore } from "../../store";
import Pagination from "../../components/common/Pagination.vue";
import List from "../../components/common/List.vue";
import CharacterItem from "../../components/modules/characters/CharacterItem.vue";

const store = useCharactersStore();

store.loadCharacters();
</script>

<template>
  <Pagination
    plural-label="Personagens"
    singular-label="Personagem"
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
    :items-per-row="3"
  >
    <CharacterItem
      v-for="character in store.atualPage"
      :character="character"
    />
  </List>
</template>

<style scoped></style>
