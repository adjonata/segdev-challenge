import { RouteRecordRaw } from "vue-router";
import { LocationsRoutes } from "./enums";

/**
 * Components
 */
import LocationsList from "../pages/locations/List.vue";

export const locationsRoutes: RouteRecordRaw[] = [
  {
    path: "/locations",
    name: LocationsRoutes.LIST,
    component: LocationsList
  }
];
