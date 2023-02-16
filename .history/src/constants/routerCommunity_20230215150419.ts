import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import AuthView from "@/views/community/AuthView.vue";
import HomeViewChecker from "@/views/community/HomeViewChecker.vue";

import type { RouteRecordRaw } from "vue-router";
import { checkPermissions } from "@/utils";
const ROUTER_COMMUNITY: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "community",
    component: HomeView,
  },

  {
    path: "/tournament/:id",
    name: "tournament-list",
    component: TournamentView,
  },
  {
    path: "/events/:id",
    name: "events",
    component: EventViewVue,
  },
  {
    path: "/auth",
    name: "auth-community",
    component: AuthView,
  },
  {
    path: "/checker",
    name: "home-community-checker",
    component: HomeViewChecker,
  },
];
export default ROUTER_COMMUNITY;
