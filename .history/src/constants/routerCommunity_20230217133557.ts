import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import AuthView from "@/views/community/AuthView.vue";
import DashboardRoleView from "@/views/community/DashboardRoleView.vue";
import ErrorView from "@/views/community/ErrorView.vue";
import type { RouteRecordRaw } from "vue-router";

const ROUTER_COMMUNITY: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "community",
    component: HomeView,
    meta: { requiresAuth: true, allowRoles: ["entry", "checker"] },
  },
  {
    path: "/login",
    name: "login",
    component: AuthView,
    meta: {
      allowRoles: ["entry", "checker"],
    },
  },
  {
    path: "/tournament/:id",
    name: "tournament-list",
    component: TournamentView,
    meta: {
      requiresAuth: true,
      allowRoles: ["entry"],
    },
  },
  {
    path: "/events/:id",
    name: "events",
    component: EventViewVue,
    meta: {
      requiresAuth: true,
      allowRoles: ["entry"],
    },
  },
  {
    path: "/checker",
    component: DashboardRoleView,
    meta: {
      requiresAuth: true,
      allowRoles: ["checker"],
    },
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
    meta: {
      requiresAuth: true,
      allowRoles: ["entry, checker"],
    },
  },
];
export default ROUTER_COMMUNITY;
