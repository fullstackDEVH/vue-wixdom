import { createStore, Store } from "vuex";

interface RootState {
  role: string;
}
interface changedRolePayload {
  role: string;
}
const store: Store<RootState> = createStore({
  state: {
    role: "",
  },
  mutations: {
    changeUserRole(state: RootState, payload: changedRolePayload) {
      console.log(state.role);
      console.log(payload.role);
      state.role = payload.role;
    },
  },
  actions: {
    changeUserRole({ commit }: any, payload: changedRolePayload) {
      console.log(payload);
      commit("changeUserRole", payload);
    },
  },
  getters: {
    getRole(state: RootState) {
      return state.role;
    },
  },
});

export default store;
