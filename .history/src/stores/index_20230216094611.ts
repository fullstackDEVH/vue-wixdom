import { createStore, Store } from "vuex";

interface RootState {
  role: string;
}

const store: Store<RootState> = createStore({
  state: {
    role: 0,
  },
  mutations: {
    userRole(state:RootState ) {
      state.role = 
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    getRole(state: RootState) {
      return state.role;
    },
  },
});

export default store;
