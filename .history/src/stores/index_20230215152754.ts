import { createStore } from "vuex";

// My custom modules
import exampleModule from "./community/modules";
import { ExampleStateInterface } from "./community/modules/state";

export interface StateInterface {
  example: ExampleStateInterface;
}

export default createStore<StateInterface>({
  modules: {
    example: exampleModule,
  },
});
