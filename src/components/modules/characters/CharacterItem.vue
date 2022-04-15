<script setup lang="ts">
import { Character } from "../../../types";

interface Props {
  character: Character;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="character-item">
    <img :src="character.image" alt="Personagem.png" />
    <h3>{{ character.name }}</h3>
    <ul>
      <li><b>Status:</b> {{ character.status }}</li>
      <li><b>Espécie:</b> {{ character.species }}</li>
      <li><b>Tipo:</b> {{ character.type }}</li>
      <li><b>Gênero:</b> {{ character.gender }}</li>
      <li><b>Origem:</b> {{ character.origin.name }}</li>
      <li><b>Localização:</b> {{ character.location.name }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.character-item {
  background: $grey-dark;
  padding: 10px;
  border-radius: 3px;

  img {
    width: 100%;
  }

  ul {
    li {
      color: $grey;
    }
  }
}
</style>
