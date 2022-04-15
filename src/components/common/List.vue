<script setup lang="ts">
import Spinner from "./Spinner.vue";
interface Props {
  isLoading: boolean;
  isEmpty: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="list">
    <div class="list__content" v-if="!isLoading">
      <slot></slot>
    </div>
    <div class="list__loading" v-if="isLoading">
      <Spinner />
    </div>
    <div class="list__empty" v-else-if="isEmpty">
      <p>Nenhum item encontrado...</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 14px;

    @media (max-width: $md) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 8px;
    }
  }

  &__loading,
  &__empty {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__empty {
    p {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
