import { useQuery } from "vue-query";
import api from "../../../api";

export const MODULE_NAME = "characters";

export function useCharacters() {
  const getCharacter = (id: number) => {
    return {
      ...useQuery([MODULE_NAME, id], async ({ queryKey }) => {
        return await api.charactersModule.get(queryKey[1] as number);
      })
    };
  };

  const listCharacters = () => {
    return {
      ...useQuery(
        MODULE_NAME,
        async () =>
          await api.charactersModule.list().then((response) => response.results)
      )
    };
  };

  return {
    getCharacter,
    listCharacters
  };
}
