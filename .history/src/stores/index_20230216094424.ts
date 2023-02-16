import { createStore, Store } from "vuex";

interface RootState {
  count: number;
}

const store: Store<RootState> = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
});

export default store;
