import { RouteLocationRaw } from "vue-router";
import {
  DefaultRoutes,
  CharactersRoutes,
  EpisodeRoutes,
  LocationsRoutes
} from "../../routes/enums";

type MenuItem = {
  label: string;
  routeName: string;
};

export default [
  {
    label: "Início",
    routeName: DefaultRoutes.HOME
  },
  {
    label: "Episódios",
    routeName: EpisodeRoutes.LIST
  },
  {
    label: "Locais",
    routeName: LocationsRoutes.LIST
  },
  {
    label: "Personagens",
    routeName: CharactersRoutes.LIST
  }
] as MenuItem[];
