import HomeView from "@/views/cms/HomeView.vue";
import CreateProjectView from "@/views/cms/CreateProjectView.vue";
import type { RouteRecordRaw } from "vue-router";

const ROUTER_CMS: Array<RouteRecordRaw> = [
  {
    path: "/cms",
    name: "home-cms",
    component: HomeView,
    meta: { requiresAuth: true, source: "cms" },
  },
  {
    path: "/cms/create",
    name: "create-project",
    component: CreateProjectView,
    meta: { requiresAuth: true, source: "cms" },
  },
];
export default ROUTER_CMS;
