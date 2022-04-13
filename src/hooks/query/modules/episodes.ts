import { useQuery } from "vue-query";
import api from "../../../api";

export const MODULE_NAME = "episodes";

export function useEpisodes() {
  const getEpisode = (id: number) => {
    return {
      ...useQuery([MODULE_NAME, id], async ({ queryKey }) => {
        return await api.episodesModule.get(queryKey[1] as number);
      })
    };
  };

  const listEpisodes = () => {
    return {
      ...useQuery(
        MODULE_NAME,
        async () =>
          await api.episodesModule.list().then((response) => response.results)
      )
    };
  };

  return {
    getEpisode,
    listEpisodes
  };
}
