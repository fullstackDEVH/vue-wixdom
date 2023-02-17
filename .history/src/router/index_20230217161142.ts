import { createRouter, createWebHistory } from "vue-router";
import { ROUTER_CMS, ROUTER_COMMUNITY } from "@/constants";
import store from "../stores";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...ROUTER_COMMUNITY, ...ROUTER_CMS],
});
router.beforeEach((to, from, next) => {
  const sourceRoter = to.meta.source;
  console.log(to);
  if (sourceRoter === "cms") {
    // do something
  } else {
    const userRole = store.state.role;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    // const allowedRoles: any = to.meta.allowedRoles;
    // if (requiresAuth && !userRole) {
    //   next({ path: "/login" });
    // } else if (userRole && allowedRoles && !allowedRoles.includes(userRole)) {
    //   next({ path: "/error" });
    // } else {
    //   next();
    // }
    if (requiresAuth && !userRole) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});
export default router;
