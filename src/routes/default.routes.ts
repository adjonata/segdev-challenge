import { DefaultRoutes } from "./enums";
import { RouteRecordRaw } from "vue-router";

/**
 * Components
 */
import Home from "../pages/Home.vue";

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: DefaultRoutes.HOME,
    component: Home
  }
];
