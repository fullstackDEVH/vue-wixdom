import { createRouter, createWebHistory } from "vue-router";
import CommunnityView from "../views/CommunnityView.vue";
import TournamentView from "../views/TournamentView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../components/Layout/MainLayout.vue"),
      children: [{ path: "/", component: CommunnityView }],
    },
    {
      path: "/tournament",
      name: "Tournament",
      component: TournamentView,
    },
  ],
});

export default router;
