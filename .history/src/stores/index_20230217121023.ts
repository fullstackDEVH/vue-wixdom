import { createStore, Store } from "vuex";
import type { Commit } from "vuex";
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
    // CHANGE ROLE OF USER IN THE PROJECT
    changeUserRole(state: RootState, payload: changedRolePayload) {
      const { role } = payload;
      state.role = role;
    },
    // REMOVE ROLE OF USER IN THE PROJECT
    removeUserRole(state: RootState) {
      state.role = "";
    },
    // KEEP STATE LOGIN OF USER IN LOCALSTORAGE
    login(state: RootState) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    // REMOVE STATE LOGIN OF USER IN LOCALSTORAGE
    logout(state: RootState) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
  actions: {
    changeUserRole(
      { commit }: { commit: Commit },
      payload: changedRolePayload
    ) {
      commit("changeUserRole", payload);
    },
    removeUserRole({ commit }: { commit: Commit }) {
      commit("removeUserRole");
    },
    login({ commit }: { commit: Commit }) {
      commit("login");
    },
    logout({ commit }: { commit: Commit }) {
      commit("login");
    },
  },
  getters: {
    getRole(state: RootState) {
      return state.role;
    },
  },
});

export default store;
