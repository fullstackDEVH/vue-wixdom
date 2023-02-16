import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementPlus from "element-plus";
import axios from "axios";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.css";
library.add(fas);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.config.globalProperties.$axios = axios;
// eslint-disable-next-line vue/multi-word-component-names
app.component("fa", FontAwesomeIcon);
app.mount("#app");
