import { defineStore } from "pinia";
import api from "../api";
import { Character, CharactersFilters } from "../types";

const MODULE_NAME = "characters";

export const useCharactersStore = defineStore(MODULE_NAME, {
  state: () => {
    return {
      /**
       * Todas os personagens retornados da API
       * Cada indíce é relacionado a uma página
       */
      pages: [] as Character[][],
      /**
       * Paginação e Filtragem
       */
      filters: {
        name: "",
        page: 1
      } as CharactersFilters,
      /**
       * Total de páginas correspondentes a filtragem atual
       */
      totalPages: 0,
      /**
       * Estado de carregamento
       */
      isLoading: false
    };
  },
  actions: {
    async loadCharacters() {
      this.isLoading = true;

      /**
       * Caso a página não exista dentro da array de páginas,
       * realiza uma nova consulta e salva ela no estado para
       * evitar recarregamento posterior
       */
      if (!this.pages[this.filters.page]) {
        await api.charactersModule
          .list(this.filters)
          .then((data) => {
            this.pages[this.filters.page] = data.results;
            this.totalPages = data.info.pages;
          })
          .catch(() => this.resetFull());
      }

      this.isLoading = false;
    },
    /**
     * Reseta o estado para o valor inicial
     */
    resetFull() {
      this.filters.page = 1;
      this.totalPages = 0;
      this.pages = [];
    },
    /**
     * Volta uma página e carrega os itens dela
     */
    decrementPage() {
      if (this.isEnableToDecrementPage) {
        this.filters.page--;
        this.loadCharacters();
      }
    },
    /**
     * Avança uma página e carrega os itens dela
     */
    incrementPage() {
      if (this.isEnableToIncrementPage) {
        this.filters.page++;
        this.loadCharacters();
      }
    },
    /**
     * Ao mudar o valor da pesquisa, é necessário reiniciar
     * a paginação (pois os o total de páginas muda)
     */
    changeNameFilter(value: string) {
      this.resetFull(); // Reseta a paginação e o estado
      this.filters.name = value;
      this.loadCharacters();
    }
  },
  getters: {
    atualPage(state): Character[] {
      return state.pages[state.filters.page] || [];
    },
    isEnableToIncrementPage: (state) => state.filters.page < state.totalPages,
    isEnableToDecrementPage: (state) => state.filters.page > 1
  }
});
