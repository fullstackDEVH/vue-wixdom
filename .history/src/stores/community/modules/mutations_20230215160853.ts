import type { MutationTree } from "vuex";
import type { ExampleStateInterface } from "./state";

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  changeRole(state, role) {
    return (state.role = role);
  },
};

export default mutation;
