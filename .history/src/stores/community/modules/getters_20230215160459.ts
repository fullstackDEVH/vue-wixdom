import type { StateInterface } from "@/stores";
import type { GetterTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
  getRole(state, getters) {
    return getters.role;
  },
};

export default getters;
