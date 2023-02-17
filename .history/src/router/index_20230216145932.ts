import { createRouter, createWebHistory } from "vue-router";
import { ROUTER_CMS, ROUTER_COMMUNITY } from "@/constants";
import store from "../stores";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...ROUTER_COMMUNITY, ...ROUTER_CMS],
});
router.beforeEach((to, from, next) => {
  const userRole = store.state.role;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!userRole) {
    next("/login");
  }
  if (requiresAuth && !userRole) {
    next("/login");
  } else if (requiresAuth && userRole === "entry") {
    next("/");
  } else if (requiresAuth && userRole === "checker") {
    next("/dashboard");
  } else {
    next("/login");
  }
});
export default router;
