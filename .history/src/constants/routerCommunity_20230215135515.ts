import type IRouter from "@/interfaces/IRouter";
import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import AuthView from "@/views/community/AuthView.vue";
import HomeViewChecker "@/views/community/HomeViewChecker.vue";
const ROUTER_COMMUNITY: Array<IRouter> = [
  {
    path: "/community",
    name: "home-community",
    component: HomeView,
  },
  {
    path: "/community/tournament/:id",
    name: "tournament-list",
    component: TournamentView,
  },
  {
    path: "/community/events/:id",
    name: "events",
    component: EventViewVue,
  },
  {
    path: "/auth",
    name: "auth-community",
    component: AuthView,
  },
];
export default ROUTER_COMMUNITY;
