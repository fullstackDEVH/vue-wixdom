<!-- <script setup lang="ts">
import { RouterView } from "vue-router";
import { EXCEPT_PATH } from "./constants";
import TheHeader from "./components/Layout/TheHeader.vue";
import TheFooter from "./components/Layout/TheFooter.vue";
</script> -->

<template>
  <div class="app">
    <TheHeader v-if="isMatchRouter($route.name)" />
    <RouterView />
    <TheFooter v-if="isMatchRouter($route.name)" />
  </div>
</template>


<!-- <script lang="ts">
import { useStore } from "vuex";
const store = useStore();
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  props: {},
  created() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      store.commit("login");
    }
  },
  methods: {
    isMatchRouter(name: any) {
      if (!EXCEPT_PATH.includes(name)) return true;
    },
  },
};
</script> -->
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { RouterView } from "vue-router";
import { EXCEPT_PATH } from "./constants";
import TheHeader from "./components/Layout/TheHeader.vue";
import TheFooter from "./components/Layout/TheFooter.vue";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    onMounted(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        store.dispatch("login");
      } else {
        router.push({ path: "/login" });
      }
    });
    const isMatchRouter = (name: any) => {
      if (!EXCEPT_PATH.includes(name)) return true;
    };

    return {
      TheHeader,
      TheFooter,
      EXCEPT_PATH,
      isMatchRouter,
      router,
      store,
      RouterView,
    };
  },
});
</script>

<style scoped>
.app {
  background-color: var(--background-color);
  min-height: 100vh;
}
</style>
