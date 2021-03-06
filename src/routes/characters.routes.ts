import { RouteRecordRaw } from "vue-router";
import { CharactersRoutes } from "./enums";

/**
 * Components
 */
import CharactersList from "../pages/characters/List.vue";

export const charactersRoutes: RouteRecordRaw[] = [
  {
    path: "/characters",
    name: CharactersRoutes.LIST,
    component: CharactersList
  }
];
