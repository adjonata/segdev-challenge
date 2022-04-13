import axios from "../../libs/axios";
import { ApiPagination, Character, CharactersFilters } from "../../types";

const BASE_PATH = "/character";

const ErrorMessages = {
  LIST_CHARACTERS: "Erro ao buscar personagens",
  GET_CHARACTER: "Erro ao buscar personagem"
};

const charactersModule = {
  /**
   * Get all characters
   */
  async list(filters: CharactersFilters = {}) {
    try {
      const response = await axios.get<ApiPagination<Character[]>>(BASE_PATH, {
        params: filters
      });

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.LIST_CHARACTERS);
    }
  },
  /**
   * Get a single character
   */
  async get(id: number) {
    try {
      const response = await axios.get<ApiPagination<Character>>(
        `${BASE_PATH}/${id}`
      );

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.GET_CHARACTER);
    }
  },
  /**
   * Get multiple characters
   */
  async getMultiple(ids: number[]) {
    try {
      const response = await axios.get<ApiPagination<Character[]>>(
        `${BASE_PATH}/${ids.join(",")}`
      );

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.GET_CHARACTER);
    }
  }
};

export default charactersModule;
