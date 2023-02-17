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
  const allowedRoles: any = to.meta.allowedRoles;
  console.log(allowedRoles);
  if (requiresAuth && !userRole) {
    next("/login");
  } else {
    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      next({ path: "/error" });
    }
  }
  //console.log(store.state.role);
  // if (!userRole) {
  //   next("/login");
  // } else {
  //   if (requiresAuth && !userRole) {
  //     next("/login");
  //   } else if (requiresAuth && userRole === "entry") {
  //     next("/");
  //   } else if (requiresAuth && userRole === "checker") {
  //     next("/dashboard");
  //   } else {
  //     next();
  //   }
  // }
});
export default router;
