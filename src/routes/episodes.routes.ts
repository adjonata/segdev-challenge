import { RouteRecordRaw } from "vue-router";
import { EpisodeRoutes } from "./enums";

/**
 * Components
 */
import EpisodesList from "../pages/episodes/List.vue";

export const episodesRoutes: RouteRecordRaw[] = [
  {
    path: "/episodes",
    name: EpisodeRoutes.LIST,
    component: EpisodesList
  }
];
