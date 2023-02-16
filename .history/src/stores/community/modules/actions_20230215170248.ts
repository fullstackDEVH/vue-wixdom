import type { StateInterface } from "@/stores";
import type { ExampleStateInterface } from "./state";

const actions = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
  changeRoleAction(commit: any, payload: any) {
    console.log(payload);
    commit("changeRoleAction", payload);
  },
};

export default actions;
