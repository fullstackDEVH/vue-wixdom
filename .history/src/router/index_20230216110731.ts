import { createRouter, createWebHistory } from "vue-router";
import { ROUTER_CMS, ROUTER_COMMUNITY } from "@/constants";
import { useStore } from "vuex";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...ROUTER_COMMUNITY, ...ROUTER_CMS],
});
router.beforeEach((to, from, next) => {
  // const store = useStore();
  // console.log(store);
  // if (to.meta.requiresAuth && !store.state.role) {
  //   next("/dashboard");
  // } else {
  //   next("/");
  // }
});
export default router;
