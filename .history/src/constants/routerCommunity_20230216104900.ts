import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import AuthView from "@/views/community/AuthView.vue";
import HomeViewChecker from "@/views/community/HomeViewChecker.vue";
import DashboardRoleView from "@/views/community/DashboardRoleView.vue";
import type { RouteRecordRaw } from "vue-router";

import { useStore } from "vuex";
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
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
      roles: ["manager"],
    },
  },
];
export default ROUTER_COMMUNITY;
