import type { StateInterface } from "@/stores";
import { GetterTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
