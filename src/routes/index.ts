import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

/**
 * Pages
 */
import Episodes from "../pages/Episodes.vue";
import Characters from "../pages/Characters.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "episodes",
    component: Episodes
  },
  {
    path: "/characters",
    name: "characters",
    component: Characters
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
