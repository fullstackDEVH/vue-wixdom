import type { StateInterface } from "@/stores";
import type { GetterTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
  getRoleUser() {
    return this.roleUser;
  },
};

export default getters;
