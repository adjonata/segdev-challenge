import { RouteRecordRaw } from "vue-router";
import { CharactersRoutes } from "./enums";

/**
 * Components
 */
import CharactersList from "../pages/characters/List.vue";
import CharactersView from "../pages/characters/View.vue";

export const charactersRoutes: RouteRecordRaw[] = [
  {
    path: "/characters",
    name: CharactersRoutes.LIST,
    component: CharactersList
  },
  {
    path: "/characters/:id",
    name: CharactersRoutes.VIEW,
    component: CharactersView
  }
];
