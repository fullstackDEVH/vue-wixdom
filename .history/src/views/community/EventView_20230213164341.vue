<script setup lang="ts">
import TheSideBar from "@/components/Common/TheSideBar.vue";
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import { MENU_COMMUNITY } from "../../constants";
</script>

<template>
  <div class="layout__container">
    <TheSideBar :menu="MENU_COMMUNITY" />
    <div class="panel__layout-main">
      <div class="layout__container-header">
        <TheUserInfo />
      </div>
      <div class="panel__layout-content">
        <div class="the-container"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  components: {
    TheSideBar,
    TheUserInfo,
  },
};
</script>