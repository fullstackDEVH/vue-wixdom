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
