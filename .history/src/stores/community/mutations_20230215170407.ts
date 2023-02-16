import type { ExampleStateInterface } from "./state";

const mutation = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  changeRoleAction(state: any, role: any) {
    console.log("Mutation changed");
    console.log("prev state", state);
    console.log("new state", role);
    return (state.role = role);
  },
};

export default mutation;
