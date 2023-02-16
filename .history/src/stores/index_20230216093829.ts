import type { InjectionKey } from "vue";

import exampleModule from "./community/modules";
import type { ExampleStateInterface } from "./community/modules/state";

export interface StateInterface {
  example: ExampleStateInterface;
}
// define injection key
export const key: InjectionKey<Store<StateInterface>> = Symbol();

export const store = createStore<StateInterface>({
  modules: {
    example: exampleModule,
  },
});
