import { RouteLocationRaw } from "vue-router";
import {
  DefaultRoutes,
  CharactersRoutes,
  EpisodeRoutes,
  LocationsRoutes
} from "../../routes/enums";

type MenuItem = {
  label: string;
  to: RouteLocationRaw;
};

export default [
  {
    label: "Início",
    to: {
      name: DefaultRoutes.HOME
    }
  },
  {
    label: "Episódios",
    to: {
      name: EpisodeRoutes.LIST
    }
  },
  {
    label: "Localizações",
    to: {
      name: LocationsRoutes.LIST
    }
  },
  {
    label: "Personagens",
    to: {
      name: CharactersRoutes.LIST
    }
  }
] as MenuItem[];
