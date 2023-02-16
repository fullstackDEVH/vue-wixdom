import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import AuthView from "@/views/community/AuthView.vue";
import HomeViewChecker from "@/views/community/HomeViewChecker.vue";

import type { RouteRecordRaw } from "vue-router";
import { checkPermissions } from "@/utils";
const ROUTER_COMMUNITY: Array<RouteRecordRaw> = [
  {
    path: "/community",
    name: "home-community",
    component: HomeView,
    meta: { roles: ["entrty"] },
    beforeEnter: (to, from, next) => {
      const redirect = checkPermissions(to);
      if (redirect) {
        next(redirect);
      } else {
        next();
      }
    },
  },

  {
    path: "/community/tournament/:id",
    name: "tournament-list",
    component: TournamentView,
    meta: { roles: ["entrty"] },
  },
  {
    path: "/community/events/:id",
    name: "events",
    component: EventViewVue,
    meta: { roles: ["entrty"] },
  },
  {
    path: "/auth",
    name: "auth-community",
    component: AuthView,
    meta: { roles: ["entrty"] },
  },
  {
    path: "/community",
    name: "home-community-checker",
    component: HomeViewChecker,
    meta: { roles: ["checker"] },
  },
];
export default ROUTER_COMMUNITY;
