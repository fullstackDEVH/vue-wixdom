

<template></template>

<style scoped>
.tournament {
  height: 100%;
}

.tournament__content {
  flex: 1;
  transition: all 0.3s ease;
}
.tournament__content-main {
  padding: 16px 12px;
}
</style>


<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import { MENU_COMMUNITY } from "../../constants";
import TheTournament from "@/components/Common/TheTournament.vue";
import TheSideBar from "@/components/Common/TheSideBar.vue";
export default defineComponent({
  setup() {
    return {
      TheUserInfo,
      TheTournament,
      TheSideBar,
      MENU_COMMUNITY,
    };
  },
});
</script>

