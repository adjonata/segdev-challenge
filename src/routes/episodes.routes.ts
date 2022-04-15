import { RouteRecordRaw } from "vue-router";
import { EpisodeRoutes } from "./enums";

/**
 * Components
 */
import EpisodesList from "../pages/episodes/List.vue";
import EpisodesView from "../pages/episodes/View.vue";

export const episodesRoutes: RouteRecordRaw[] = [
  {
    path: "/episodes",
    name: EpisodeRoutes.LIST,
    component: EpisodesList
  },
  {
    path: "/episodes/:id",
    name: EpisodeRoutes.VIEW,
    component: EpisodesView
  }
];
