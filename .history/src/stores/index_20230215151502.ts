import Vue from "vue";
import Vuex from "vuex";
import { createApp } from "vue";
import { createStore } from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    products,
  },
});
