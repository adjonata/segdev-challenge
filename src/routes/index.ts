import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

/**
 * Pages
 */
import { episodesRoutes } from "./episodes.routes";
import { charactersRoutes } from "./characters.routes";

/**
 * Enums
 */

const routes: RouteRecordRaw[] = [...episodesRoutes, ...charactersRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
