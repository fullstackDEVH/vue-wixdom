<script setup lang="ts">
import { RouterLink } from "vue-router";
import { MENU_CMS } from "../../constants/index";
import TheSideBar from "@/components/Common/TheSideBar.vue";
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import TheEvent from "@/components/Common/TheEvent.vue";
</script>
<template>
  <div class="layout__container">
    <TheSideBar :menu="MENU_CMS" @onChangePath="handleChangePath($event)" />
    <div class="panel__layout-main">
      <div class="layout__container-header">
        <TheUserInfo />
      </div>
      <div class="panel__layout-content">
        <div class="the-container">
          <TheEvent v-if="currentPath === '/events'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    TheSideBar,
    TheUserInfo,
    TheEvent,
  },
  data() {
    return {
      currentPath: "/events",
    };
  },
  methods: {
    handleChangePath(path: string) {
      this.currentPath = path;
    },
  },
};
</script>
<style scoped>
</style>
