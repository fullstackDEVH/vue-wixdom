import { createStore, Store } from "vuex";

interface RootState {
  role: string;
  isLoggedIn: boolean;
}
interface changedRolePayload {
  role: string;
}

const store: Store<RootState> = createStore({
  state: {
    role: "",
    isLoggedIn: false,
  },
  mutations: {
    changeUserRole(state: RootState, payload: changedRolePayload) {
      state.role = payload.role;
    },
    removeUserRole(state: RootState) {
      state.role = "";
    },
  },
  actions: {
    changeUserRole({ commit }: any, payload: changedRolePayload) {
      commit("changeUserRole", payload);
    },
    removeUserRole({ commit }: any) {
      commit("removeUserRole");
    },
  },
  getters: {
    getRole(state: RootState) {
      return state.role;
    },
  },
});

export default store;
