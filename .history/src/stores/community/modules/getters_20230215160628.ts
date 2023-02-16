import type { StateInterface } from "@/stores";
import type { GetterTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  getRole(state) {
    return state.role;
  },
};

export default getters;
