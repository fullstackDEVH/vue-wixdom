import { createStore } from "vuex";

import exampleModule from "./community/modules";
import type { ExampleStateInterface } from "./community/modules/state";

export interface StateInterface {
  example: ExampleStateInterface;
}

export default createStore<StateInterface>({
  modules: {
    example: exampleModule,
  },
});
