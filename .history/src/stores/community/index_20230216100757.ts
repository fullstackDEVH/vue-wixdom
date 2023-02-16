// import type { StateInterface } from "@/stores";
// import type { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { type ExampleStateInterface } from "./state";

const comModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
