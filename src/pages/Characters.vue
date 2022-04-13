<script setup lang="ts">
import { useQuery } from "../hooks";

const { listCharacters } = useQuery();
const { data: characters, isFetched, isLoading } = listCharacters();
</script>

<template>
  <router-link :to="{ name: 'episodes' }">Episódios</router-link>
  <div>Personagens</div>
  <p v-if="isLoading">Carregando...</p>
  <ul v-if="isFetched">
    <li v-for="character in characters" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
</template>

<style scoped></style>
