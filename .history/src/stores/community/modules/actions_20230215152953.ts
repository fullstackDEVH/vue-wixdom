import type { StateInterface } from "@/stores";
import { ActionTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const actions: ActionTree<ExampleStateInterface, StateInterfaceerface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
