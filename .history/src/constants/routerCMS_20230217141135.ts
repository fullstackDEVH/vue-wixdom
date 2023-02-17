import HomeView from "@/views/cms/HomeView.vue";
import CreateProjectView from "@/views/cms/CreateProjectView.vue";
import type { RouteRecordRaw } from "vue-router";

const ROUTER_CMS: Array<RouteRecordRaw> = [
  {
    path: "/cms",
    name: "home-cms",
    component: HomeView,
  },
  {
    path: "/cms/create",
    name: "create-project",
    component: CreateProjectView,
  },
];
export default ROUTER_CMS;
