import { useInfiniteQuery, useQuery } from "vue-query";
import api from "../../../api";
import { getUrlParam } from "../../../utils/url";

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
      ...useInfiniteQuery(
        MODULE_NAME,
        async ({ pageParam }) =>
          await api.episodesModule.list({ page: pageParam }),
        {
          getNextPageParam: (lastPage, _pages) =>
            lastPage?.info?.next
              ? getUrlParam(lastPage.info.next, "page")
              : undefined
        }
      )
    };
  };

  return {
    getEpisode,
    listEpisodes
  };
}
