<script setup lang="ts">
import { RouterLink } from "vue-router";
import { MENU_CMS } from "../../constants/index";
import TheSideBar from "@/components/Common/TheSideBar.vue";
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import TheEvent from "@/components/Common/TheEvent.vue";
</script>
<template>
  <div class="cms">
    <TheSideBar :menu="MENU_CMS" @onChangePath="handleChangePath($event)" />
    <div class="panel__layout-main">
      <div class="the-header-cms">
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
.cms {
  height: 100%;
  display: flex;
}
.the-header-cms {
  left: var(--sidebar-width);
  border-bottom: var(--border);
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--background-color);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
}
</style>
