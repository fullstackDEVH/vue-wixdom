import type { StateInterface } from "@/stores";
import type { ActionTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
  changeRoleAction(commit: any, payload: any) {
    console.log(payload);
    commit("changeRole", payload);
  },
};

export default actions;
