import type IRouter from "@/interfaces/IRouter";
import HomeView from "@/views/community/HomeView.vue";
import TournamentView from "@/views/community/TournamentView.vue";
import EventViewVue from "@/views/community/EventView.vue";
import LoginView from "@/views/community/LoginView.vue";
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
];
export default ROUTER_COMMUNITY;
