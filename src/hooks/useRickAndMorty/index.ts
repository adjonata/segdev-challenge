import { useCharacters } from "./modules/characters";
import { useEpisodes } from "./modules/episodes";

/**
 * Queries Modules
 */

export default function () {
  return {
    ...useCharacters(),
    ...useEpisodes()
  };
}
