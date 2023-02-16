import type IRouter from "@/interfaces/IRouter";
import HomeView from "@/views/cms/HomeView.vue";
import CreateProjectView from "@/views/cms/CreateProjectView.vue";

const ROUTER_CMS: Array<IRouter> = [
  {
    path: "/cms/",
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
