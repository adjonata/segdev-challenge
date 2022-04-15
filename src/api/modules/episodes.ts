import axios from "../../libs/axios";
import { ApiPagination, Episode, EpisodesFilters } from "../../types";

const BASE_PATH = "/episode";

const ErrorMessages = {
  LIST_EPISODES: "Erro ao buscar episódios",
  GET_EPISODES: "Erro ao buscar episódio"
};

const episodesModule = {
  /**
   * Get all episodes
   */
  async list(filters?: EpisodesFilters) {
    try {
      const response = await axios.get<ApiPagination<Episode[]>>(BASE_PATH, {
        params: filters || {}
      });

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.LIST_EPISODES);
    }
  },
  /**
   * Get a single episode
   */
  async get(id: number) {
    try {
      const response = await axios.get<ApiPagination<Episode>>(
        `${BASE_PATH}/${id}`
      );

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.GET_EPISODES);
    }
  },
  /**
   * Get multiple episodes
   */
  async getMultiple(ids: number[]) {
    try {
      const response = await axios.get<ApiPagination<Episode[]>>(
        `${BASE_PATH}/${ids.join(",")}`
      );

      return response.data;
    } catch (error) {
      throw new Error(ErrorMessages.LIST_EPISODES);
    }
  }
};

export default episodesModule;
