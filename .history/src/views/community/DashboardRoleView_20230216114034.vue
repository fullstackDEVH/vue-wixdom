<script setup lang="ts">
import { MENU_COMMUNITY } from "../../constants";
</script>

<template>
  <div class="tournament">
    <div class="panel__layout-main">
      <TheSideBar :menu="MENU_COMMUNITY" />
      <div class="tournament__content">
        <div class="the-header">
          <TheUserInfo />
        </div>
        <div class="tournament__content-main">
          <div class="container">
            <TheTournament />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import TheTournament from "@/components/Common/TheTournament.vue";
import TheSideBar from "@/components/Common/TheSideBar.vue";

export default {
  components: {
    TheUserInfo,
    TheTournament,
    TheSideBar,
  },
};
</script>
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

export default defineComponent({
    import TheUserInfo from "@/components/Common/TheUserInfo.vue";
import TheTournament from "@/components/Common/TheTournament.vue";
import TheSideBar from "@/components/Common/TheSideBar.vue";
  setup() {},
});
</script>

