<script setup lang="ts">
interface Props {
  atualPage: number;
  totalPages: number;
  searchValue: string;
  isEnableToDecrement: boolean;
  isEnableToIncrement: boolean;
  isLoading: boolean;
}
const props = defineProps<Props>();

interface Emits {
  (e: "change-search", value: string): void;
  (e: "increment-page", value: boolean): void;
  (e: "decrement-page", value: boolean): void;
}
const emit = defineEmits<Emits>();

function changeSearch(event: Event) {
  const value = (event.target as any).value as string;
  emit("change-search", value);
}
</script>

<template>
  <div class="pagination">
    <div>
      <input
        class="pagination__search"
        :value="searchValue"
        placeholder="Pesquisar"
        @input="changeSearch"
      />
    </div>
    <div>
      <button
        class="pagination__button"
        :disabled="!isEnableToDecrement || isLoading"
        @click="emit('decrement-page', true)"
      >
        -
      </button>
      <b>Página {{ atualPage }}/{{ totalPages }}</b>
      <button
        class="pagination__button"
        :disabled="!isEnableToIncrement || isLoading"
        @click="emit('increment-page', true)"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  &__search {
    padding: 10px 15px;
    border-radius: 3px;
    background: none;
    border: solid 2px $green;
  }

  &__button {
    width: 30px;
    height: 30px;
    background: $green;
    border-radius: 3px;
    margin: 0 10px;
    cursor: pointer;

    &:disabled {
      filter: brightness(40%);
    }
  }
}
</style>
