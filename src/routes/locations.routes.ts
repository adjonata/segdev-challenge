import { RouteRecordRaw } from "vue-router";
import { LocationsRoutes } from "./enums";

/**
 * Components
 */
import LocationsList from "../pages/locations/List.vue";
import LocationsView from "../pages/locations/View.vue";

export const locationsRoutes: RouteRecordRaw[] = [
  {
    path: "/locations",
    name: LocationsRoutes.LIST,
    component: LocationsList
  },
  {
    path: "/locations/:id",
    name: LocationsRoutes.VIEW,
    component: LocationsView
  }
];
