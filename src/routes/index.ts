import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

/**
 * Route Modules
 */
import { episodesRoutes } from "./episodes.routes";
import { charactersRoutes } from "./characters.routes";
import { locationsRoutes } from "./locations.routes";
import { defaultRoutes } from "./default.routes";

const routes: RouteRecordRaw[] = [
  ...defaultRoutes,
  ...episodesRoutes,
  ...charactersRoutes,
  ...locationsRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
