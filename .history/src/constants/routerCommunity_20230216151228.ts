import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import AuthView from "@/views/community/AuthView.vue";
import HomeViewChecker from "@/views/community/HomeViewChecker.vue";
import DashboardRoleView from "@/views/community/DashboardRoleView.vue";
import type { RouteRecordRaw } from "vue-router";

const ROUTER_COMMUNITY: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "community",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: AuthView,
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
    path: "/checker",
    name: "home-community-checker",
    component: HomeViewChecker,
  },
  {
    path: "/dashboard",
    component: DashboardRoleView,
  },
];
export default ROUTER_COMMUNITY;
